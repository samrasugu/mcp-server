import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { google } from "googleapis";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const server = new McpServer({
  name: "Sam's Calendar",
  version: "1.0.0",
});

// function to get calendar events for a specific date
async function getMyCalendarByDate(date: string) {
  const calendar = google.calendar({
    version: "v3",
    auth: process.env.GOOGLE_PUBLIC_API_KEY,
  });

  // get start and end of the day in UTC
  const startOfDay = new Date(date);
  startOfDay.setUTCHours(0, 0, 0, 0);
  const endOfDay = new Date(startOfDay);
  endOfDay.setUTCDate(endOfDay.getUTCDate() + 1);

  try {
    const res = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = res.data.items || [];
    const meetings = events.map((event) => {
      const start = event.start?.dateTime || event.start?.date;
      return `${event.summary} at ${start}`;
    });

    if (meetings.length > 0) {
      return {
        meetings,
      };
    } else {
      return {
        meetings: [],
      };
    }
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "An unknown error occurred",
    };
  }
}

// register the tool with the server
server.tool(
  "getMyCalendarByDate",
  {
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format. Please provide a valid date string.",
    }),
  },
  async ({ date }) => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(await getMyCalendarByDate(date)),
        },
      ],
    };
  }
);

// CLI shortcut for 'today'
if (process.argv[2] === "today") {
  (async () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;
    const result = await getMyCalendarByDate(dateStr);
    if (result.error) {
      console.error("Error:", result.error);
      process.exit(1);
    } else if (!Array.isArray(result.meetings) || result.meetings.length === 0) {
      console.log("You have no meetings today.");
    } else {
      console.log("Today's meetings:");
      for (const meeting of result.meetings) {
        console.log("-", meeting);
      }
    }
    process.exit(0);
  })();
} else {
// set transport
async function init() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Server is running and listening for requests...");
}

init().catch((err) => {
  console.error("Failed to initialize server:", err);
  process.exit(1);
});
}

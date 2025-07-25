# MCP Server

A TypeScript implementation of a Model Context Protocol (MCP) server, designed to evaluate MCP capabilities over/with RAG (Retrieval-Augmented Generation) approaches for [Nutrimate](https://github.com/samrasugu/nutrimate) and other AI applications.

## Overview

This project explores the Model Context Protocol as an alternative to RAG systems, providing a standardized way for AI applications to access external data sources and tools. The server is built with TypeScript, Node.js and the [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk).

## Features

- **TypeScript-first**: Built with full TypeScript support for better developer experience
- **MCP Protocol**: Implements the Model Context Protocol via Anthropic's TypeScript SDK

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- TypeScript knowledge (recommended)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samrasugu/mcp-server.git
   cd mcp-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Development mode:**
   ```bash
   npm run dev
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Start the production server:**
   ```bash
   npm run start
   ```

## Environment Variables

Set the following environment variables (or configure them in your MCP file):

- `GOOGLE_PUBLIC_API_KEY`: Your Google API key
- `GOOGLE_CALENDAR_ID`: Your Google Calendar ID (e.g., your Gmail address)

You can set these in a `.env` file:
```
GOOGLE_PUBLIC_API_KEY=your-google-api-key
GOOGLE_CALENDAR_ID=your-calendar-id
```

## Usage

### Get Today's Meetings

To print today's meetings directly in your terminal:
```bash
node src/index.js today
```

## Integrating with Cursor MCP & Chat Interaction

This project supports integration with [Cursor MCP](https://www.cursor.so/mcp), enabling you to interact with your server via chat and automate workflows.

### 1. Configure MCP Server in Cursor

1. Open Cursor and go to the MCP panel.
2. Add a new MCP server with the following settings (example):
   - **Name**: [your name]'s Calendar
   - **Command**: `node`
   - **Args**: `src/index.ts`
   - **Host**: `localhost`
   - **Port**: `3000`
   - **Environment Variables**: Set `GOOGLE_PUBLIC_API_KEY` and `GOOGLE_CALENDAR_ID` as needed.

You can also create a `.cursor/mcp.json` file for quick setup.

The content of the `.cursor/mcp.json` file should be like this:
```json
{
  "servers": [
    {
      "name": "[your name]'s Calendar",
      "command": "node",
      "args": ["src/index.ts"],
      "host": "localhost",
      "port": 3000,
      "env": {
        "GOOGLE_PUBLIC_API_KEY": "your-google-api-key",
        "GOOGLE_CALENDAR_ID": "your-calendar-id"
      }
    }
  ]
}
```

### 2. Start the MCP Server

Run the server locally:
```bash
node src/index.ts
```

Or use the MCP panel's built-in controls to start/stop the server.

### 3. Interact via Chat

- Open the chat panel in Cursor.
- Select your MCP server (e.g., "Sam's Calendar") from the chat source dropdown.
- Ask questions like:
  - `Do I have any meetings today?`
  - `What is my next event?`
  - `List all meetings for this week.`
- The server will respond with information from your Google Calendar.

### 4. Customization

You can extend the server to support more commands or integrate with other tools. Update `src/index.ts` and restart the server to apply changes.

## Project Structure

```
mcp-server/
├── src/
│   └── index.ts          # Main server implementation
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Development

This project is actively being developed as part of an evaluation comparing MCP to RAG systems. The implementation may evolve as the evaluation progresses.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript project
- `npm run start` - Start the production server
- `npm test` - Run tests (to be implemented)

## MCP vs RAG Evaluation

This server is being developed to evaluate the effectiveness of the Model Context Protocol compared to traditional RAG approaches for AI applications, particularly focusing on:

- **Performance**: Response times and resource usage
- **Flexibility**: Ease of adding new data sources and tools
- **Maintainability**: Code organization and extensibility
- **Integration**: How well it works with existing AI workflows

## License

MIT
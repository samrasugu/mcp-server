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
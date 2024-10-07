# webhook-catch

A simple Express.js server to catch and log webhook requests.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or later recommended)
- npm (usually comes with Node.js)

## Installation

To install dependencies:

```bash
npm install
```

## Usage

To run the server:

```bash
npm run serve
```

This will start the server on `http://localhost:4000`. The server will log requests sent to the `/test` endpoint.

## Endpoints

- `POST /test`: Logs the headers and body of incoming requests and responds with a 200 status code.

## Project Structure

- `index.ts`: Main server file
- `package.json`: Project configuration and dependencies
- `README.md`: This file

## Dependencies

- express: Web server framework
- typescript: TypeScript language support
- ts-node: TypeScript execution environment

## Development

This project uses TypeScript. The `serve` script in `package.json` uses `ts-node` to run the TypeScript file directly.

## Notes

This project uses Express.js with TypeScript and can be run using Node.js.

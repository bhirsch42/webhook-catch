# webhook-catch

A simple Express.js server to catch and log webhook requests.

## Installation

```bash
npm install
```

## Usage

To run the server:

```bash
npm run serve
```

This will start the server on `http://localhost:4000`.

## Endpoints

- `POST /test`: Logs the headers and body of incoming requests and responds with a 200 status code.

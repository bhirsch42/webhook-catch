import { Hono } from "hono";

const app = new Hono();

app.post("/test", async (c) => {
  const body = await c.req.json();
  console.log("Received payload:", body);
  return c.text("Webhook received", 200);
});

export default {
  port: 4000,
  fetch: app.fetch,
};

console.log("Server running at http://localhost:4000");

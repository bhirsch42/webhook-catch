import express, { type Request, type Response } from "express";

const app = express();
const port = 4000;

app.use(express.json());

app.post("/test", async (req: Request, res: Response) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  res.status(200).send("Webhook received");
});

app.listen(port, () => {
  console.log(`Logging requests to http://localhost:${port}/test`);
});

import express from "express";
import { serve } from "inngest/express";
// import { functions, inngest } from "./inngest";

const app = express();
const port = 3000;

app.use(express.json());

// app.use(
//   '/api/inngest',
//   serve({ client: inngest, functions })
// )

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
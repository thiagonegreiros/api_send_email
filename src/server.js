import "dotenv/config";
import express from "express";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

//* API routes
const index = require("./app/routes/index");
const emailf1 = require("./app/routes/emailf1.routes");
const emailf2 = require("./app/routes/emailf2.routes");

app.use(index);
app.use("/", emailf1);
app.use("/", emailf2);

app.use("/admin/queues", BullBoard.UI);

const port = process.env.PORT || 3334;
app.listen(port, (req, res) => {
  console.log(`Running on port ${port}`);
});

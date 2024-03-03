// import { Express } from "express";
import express from "express";
import { healthRouter, calculatorRouter, keepTrackRouter } from "./routes";
import { addTimestamp, errorHandler, logger } from "./middlewares";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);
app.use("/projects", keepTrackRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

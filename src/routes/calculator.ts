import { Router, Request, Response } from "express";
import { logger, validateCalculatorRequest } from "../middlewares";
import { CalculatorRequestBody } from "../types";

export const router = Router();

// router.use(logger);

router.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Get all calculations",
    timestamp: req.timestamp,
    data: [
      { id: 1, result: 1 },
      { id: 2, result: 2 },
    ],
  });
});

router.get("/:id", (req: Request, res: Response) => {
  res.send({
    message: "Get calculation by ID",
    timestamp: req.timestamp,
    id: req.params.id,
    result: 1,
  });
  // console.log(`Query parameter: ${JSON.stringify(req.query)}`);
  // console.log(`Header: ${JSON.stringify(req.headers)}`);
  // console.log(`Method: ${req.method}`);
  // res
  //   .status(202)
  //   .header({ "X-Custom-Header": "foo", "X-Custom-Header-2": "fuu" })
  //   .send(`Hello ${req.params.id}`);
});

router.post(
  "/",
  validateCalculatorRequest,
  (req: Request<{}, any, CalculatorRequestBody>, res: Response) => {
    //   console.log(req.body);
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        result = "Invalid operator";
        break;
    }
    res.send({
      message: "Create new calculation",
      timestamp: req.timestamp,
      result,
    });
  }
);

router.put(
  "/:id",
  validateCalculatorRequest,
  (req: Request<{ id: string }, any, CalculatorRequestBody>, res: Response) => {
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        result = "Invalid operator";
        break;
    }
    res.send({
      message: "Update a calculation",
      id: req.params.id,
      timestamp: req.timestamp,
      result,
    });
  }
);

router.delete('/:id', (req: Request, res: Response) => {
    res.status(204).end();
}) 
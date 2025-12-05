import express from "express";
import userRouter from "./routes/user.routes";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/app/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

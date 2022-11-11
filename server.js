const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();
require("express-async-errors");
// const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
//routers
const userRouter = require("./routes/userRoutes");
app.use("/api/v1/auth", userRouter);

//error middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`DB Connected and server is listening on port ${port}!`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

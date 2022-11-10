const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

//error middleware
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(notFound);
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

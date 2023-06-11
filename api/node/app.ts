// importing the dependencies
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using to parse JSON bodies into JS objects
app.use(express.json());

// enabling CORS for all requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// unauthenticated endpoints
app.use(require("./routes"));

// starting the server
app.listen(9000, () => {
  /* eslint-disable */
  console.log("running at http://localhost:9000/");
  /* eslint-enable */
});
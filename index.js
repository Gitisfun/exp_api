import 'dotenv/config'
import Express from "express";
import http from "http";
import cors from "cors";
import ApiError from './errors/ApiError.js';
import errorHandler from './errors/ErrorHandler.js';

const app = Express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Test voor api");
  res.send("Welcome to the API!!! (v2.0)");
});

app.use((req, res, next) => {
    next(ApiError.notFound("Route not found"));
});

app.use(errorHandler);

server.listen(port, () => console.log(`Server is running on port ${port}`));
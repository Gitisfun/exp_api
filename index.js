import 'dotenv/config'
import Express from "express";
import http from "http";
import cors from "cors";

const app = Express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the API!!! (v2.0)");
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
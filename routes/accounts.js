import express from "express";
import queryHandler from "../database/query/queryHandler.js";
import { checkIfUserAlreadyExists, findUser, QUERY_CREATE } from "../database/tables/accounts.js";
import Authenticator from "../logic/Authenticator.js";

//import authenticator from "../middleware/authenticator.js"

const router = express.Router();

router.post("/check",/* authenticator,*/ (req, res, next) => {
  checkIfUserAlreadyExists(req.body, res, next)
});

router.post("/register"/*, authenticator*/, (req, res, next) => {
  const paramList = [req.body.username, req.body.firstname, req.body.lastname];
  Authenticator.hasher(req.body, QUERY_CREATE, paramList, queryHandler, res, next);
});

router.post("/login", (req, res, next) => {
  findUser(req.body, res, next);
});

export default router;
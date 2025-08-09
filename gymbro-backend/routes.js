import express from "express"

import { NewUser } from "./controllers/UserControler.js";
import verifyToken from "./middlewares/auth.js"

const routes = express.Router();


routes.post("/users", verifyToken, NewUser);


export default routes
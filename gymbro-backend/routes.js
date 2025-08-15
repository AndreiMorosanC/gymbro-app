import express from "express"

import { NewUser } from "./controllers/UserControler.js";
import verifyToken from "./middlewares/auth.js"
import { fetchAllExercises  } from "./controllers/ExercisesControler.js";

const routes = express.Router();


routes.post("/users", verifyToken, NewUser);

routes.get("/exercises", fetchAllExercises)

export default routes
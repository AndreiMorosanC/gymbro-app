import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js"

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

app.use("/api", routes);


app.listen(3000, () => {
  console.log("✅ Backend escuchando en http://localhost:3000");
});

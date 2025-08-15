import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Tu backend

export const getExercises = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/    `);
    console.log("📌 Ejercicios desde backend:", res.data); // 👉 Lo ves en la consola del frontend
    return res.data;
  } catch (error) {
    console.error("❌ Error al obtener ejercicios:", error);
  }
};

import  {fetchExercises}  from "../service/exercises.service.js";

export const fetchAllExercises = async (req, res) => {
  try {
    const exercises = await fetchExercises();
    res.json(exercises);
  } catch (error) {
    console.error("❌ Error al obtener ejercicios:", error);
    res.status(500).json({ error: "Error al obtener ejercicios" });
  }
};

    
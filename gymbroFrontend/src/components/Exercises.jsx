import { useEffect } from "react";
import { getExercises } from "../../service/exercisesService";

export default function Exercises() {
  useEffect(() => {
    getExercises(); // Esto hace la petición y logea en frontend
  }, []);

  return <h1>Lista de Ejercicios</h1>;
}

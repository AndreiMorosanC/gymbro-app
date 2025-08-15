import axios from "axios";


const API_URL = "https://exercisedb.p.rapidapi.com/exercises";
const API_KEY = process.env.EXERCISEDB_API_KEY;

export async function fetchExercises({ muscle, equipment, offset = 0, limit = 20 } = {}) {

  try {
    const params = {};
    if (muscle) params.muscle = muscle;
    if (equipment) params.equipment = equipment;
    if (offset) params.offset = offset;
    if (limit) params.limit = limit;

    const response = await axios.get(API_URL, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
      params,
    });

    return response.data.map(ex => ({
      id: ex.id,
      name: ex.name,
      gifUrl: ex.gifUrl,
      target: ex.target,
      equipment: ex.equipment,
    }));
  } catch (err) {
    console.error("Error fetching exercises:", err.message);
    throw err;
  }
}

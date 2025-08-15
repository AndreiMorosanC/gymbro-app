import { useAuth } from "../../Context/AuthProvider.jsx";
import Exercises from "../Exercises.jsx";

const GymDashboard = ()=>{

      const { logout } = useAuth();
      
    return(
        <div>
      <h1>Bienvenido al Gym!</h1>
      <button 
        onClick={logout} 
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Cerrar sesión
      </button>

      <Exercises/>
    </div>
    )
}

export default GymDashboard;
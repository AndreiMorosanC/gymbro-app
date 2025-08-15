import { useAuth } from "./Context/AuthProvider";
import AuthForm from "./components/AuthFormMain/AuthForm";
import GymDashboard from "./components/GymDashboardMain/GymDashboard.jsx";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;


  
  return (
    <div>
      {user ? <GymDashboard /> : <AuthForm />}
    </div>
  );
}

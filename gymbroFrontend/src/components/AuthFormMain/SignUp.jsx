import { useState } from "react";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { auth } from "../../../service/firebaseConfig";

const SignUp = ({onSwitch }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario registrado correctamente");

      const token = await getIdToken(user);
      await fetch(`${API_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });   

      
    } catch (error) {
      console.error("Error registrando usuario:", error.message);
    }
  };

  return (
    <div className="h-160 bg-[#090631]">
      <div className="h-150 w-5/5 sm:w-3/5 lg:w-2/5 bg-amber-50 mx-auto mt-20 flex items-center flex-col justify-center rounded-md">
        <h2 className="text-2xl font-se/mibold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <label className="block mb-2 text-black">Email</label>
          <input
            type="email"
            className="w-full mb-4 px-3 py-2 border rounded"
            placeholder="tu@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full mb-6 px-3 py-2 border rounded"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex w-full gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-br from-purple-600 to-blue-500 text-white py-2 rounded hover:opacity-90 transition"
            >
              Register
            </button>
            <button type="button" onClick={onSwitch}>ya tienes una cuenta? </button>
           
          </div>
        </form>
         
      </div>
    </div>
  );
};


export default SignUp;

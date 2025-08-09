import { auth } from "./firebaseConfig";

const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(path, options ={}) {
    const user = auth.currentUser;
    const headers = new Headers(options.headers || {});

    if(user){
        const token = await user.getIdToken();
        headers.set("Authorization", `Bearer ${token}`)
    }
   headers.set("Content-Type", "application/json");

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (res.status === 401) {
    
  }
  return res;
}
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { onAuthStateChanged, getIdToken, signOut } from "firebase/auth";
import { auth } from "../../service/firebaseConfig.js";


const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(null)

    const refreshToken = useCallback(async () => {
    if (!auth.currentUser) return null;
    const t = await getIdToken(auth.currentUser, true); // true fuerza refresh
    setToken(t);
    return t;
    }, []);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, async (firebaseUser)=>{
            if(firebaseUser){
                const t = await getIdToken(firebaseUser);
                setUser(firebaseUser)
                setToken(t);
            }else{
                setUser(null);
                setToken(null);
            }
            setLoading(false)
        });
        return ()=> unsub();
    }, [])

    const logout = async()=>{
        await signOut(auth);
        setUser(null);
        setToken(null);
    }
     const value = { user, token, loading, refreshToken, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
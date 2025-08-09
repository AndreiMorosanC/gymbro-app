
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";


const AuthForm = ()=>{

    const [showFirst, setShowFirst] = useState(true);

    return(
        <div>
             { showFirst  ? (
                <div>
                    <SignUp onSwitch={() => setShowFirst(false)}/>
                </div>
            ) : (
                <div>
                    <Login/>
                </div>
            )}
        </div>
    )
}

export default AuthForm;
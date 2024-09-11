import { auth, provider } from "../Config/fireBase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file


export const Login=()=>{
    const navigate=useNavigate();
    
    const signInWithGoogle=async ()=>{
        const result= await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/');
    }
    return (
        <div className="login-container">
        <p>Sign in with Google to continue</p>
        <button className="login-button" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    );
};
import { Link } from "react-router-dom";
import { auth } from "../Config/fireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css"; // Import the CSS file
import {signOut} from "firebase/auth";




export const Navbar=()=>{

    const [user]=useAuthState(auth);

    const signOutUser= async()=>{
        await signOut(auth)
    };
    return <div className="navbar">
    <Link to="/">Home</Link>
    {!user ? (
    <Link to="/login">Login</Link>
      ) :(
    <Link to="/createpost">Create Post</Link>
    )}

  
    <div className="user-info">
        {user && (<>
      <p>{auth.currentUser?.displayName}</p>
      <img src={auth.currentUser?.photoURL || ""} width="100" height="100" />
      <button className="login-button" onClick={signOutUser}>Log Out</button>
      </>)}
    </div>
  </div>
  
}
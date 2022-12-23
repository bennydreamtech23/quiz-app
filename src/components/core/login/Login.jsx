import LoginStyles from "./Login.module.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  
  return (
    <div className={LoginStyles.login}>
      <div className={LoginStyles.login__container}>
        <input
          type="text"
          className={LoginStyles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className={LoginStyles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className={LoginStyles.login__btn}
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className={LoginStyles.login__google} onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/signup">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-box">
        <h1>🏍 Bike Service Login</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/home")}>
          Login
        </button>

        <p>
          New User?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
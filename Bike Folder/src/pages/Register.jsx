import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="container">
      <div className="form-box">

        <h1>Customer Registration</h1>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Register</button>

        <p>
          Already Registered?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
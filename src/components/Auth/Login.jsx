import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import DynamicForm from "../DynamicForm/dynamicForm";

const Login = ({ setUser, setLoggedInThroughLoginPage }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      setUser({ name: user.displayName || user.email, isAuthenticated: true });
      setLoggedInThroughLoginPage(true);
      return "success";
    } catch (error) {
      console.error("Login error: ", error.message);
      throw new Error("Login failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { email, password } = formValues;
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      await login(trimmedEmail, trimmedPassword);

      navigate("/admin");
    } catch (err) {
      setError("Failed to log in: " + err.message);
    }
  };

  const handleChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const inputKeys = ["email", "password"];
  const labels = {
    email: "Email",
    password: "Password",
  };
  const inputTypes = {
    email: "email",
    password: "password",
  };
  const placeholders = {
    email: "Enter your email",
    password: "Enter your password",
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      <form style={{ display: "grid", gap: "3vh" }} onSubmit={handleLogin}>
        <DynamicForm
          columns={1}
          inputKeys={inputKeys}
          labels={labels}
          inputTypes={inputTypes}
          values={formValues}
          onChangeHandlers={{
            email: (value) => handleChange("email", value),
            password: (value) => handleChange("password", value),
          }}
          placeholders={placeholders}
        />
        <button style={{ placeSelf: "end" }} className="primary-btn" type="submit">
          Log In
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

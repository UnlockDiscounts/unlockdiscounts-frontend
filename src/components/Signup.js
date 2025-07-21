import "../styles/Signup.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [cpError, setCpError] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(value) || value === "") {
      setName(value);
    }
  };

  const handleEmail = (e) => {
    const emailRegex = /^[a-z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = e.target.value;
    if (emailRegex.test(emailValue) || emailValue === "") {
      setEmail(emailValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setCpError("");

    const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}/;
    const passwordLengthRegex = /^.{8,}$/;

    if (!passwordLengthRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number, and special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      setCpError("Passwords do not match");
      return;
    }

    // Form passed all checks, proceed
    console.log("Form submitted:", {
      name,
      email,
      password,
      confirmPassword,
      gender,
    });

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setGender("");
  };

  return (
    <div id="wrapper">
      <Navbar />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} method="POST">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleName}
            value={name}
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleEmail}
            value={email}
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}

          <input
            id="cp"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {cpError && <div className="error-message">{cpError}</div>}

          <select
            name="gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>

        <div className="already-account">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

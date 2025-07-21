import "../styles/Signup.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cpError, setCpError] = useState('');

    const handleName = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(value) || value === '') {
            setName(value);
        }
    };

    const handleEmail = (e) => {
        const emailRegex = /^[a-z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValue = e.target.value;
        if (emailRegex.test(emailValue) || emailValue === '') {
            setEmail(emailValue);
        }
    };

    const formData = (e) => {
        e.preventDefault();
        setPasswordError('');
        setCpError('');

        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;

        const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}/;
        const passwordLengthRegex = /^.{8,}$/;

        if (!passwordLengthRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        }

        if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain special characters, capital and small letters, and numbers');
            return;
        }

        if (password !== confirm_password) {
            setCpError('Passwords do not match');
            return;
        }

        // If all validations pass
        console.log("Form Submitted:", { Name, Email, password, confirm_password });
    };

    return (
        <div id="wrapper">
            <Navbar />
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={formData} method="POST">
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
                    />
                    {passwordError && <div className="error-message">{passwordError}</div>}

                    <input
                        id="cp"
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                    />
                    {cpError && <div className="error-message">{cpError}</div>}

                    <select name="gender" defaultValue="" required>
                        <option value="" disabled>Select Gender</option>
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

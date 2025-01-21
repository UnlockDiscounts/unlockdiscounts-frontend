import "../styles/Signup.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Signup = () => {
    // const [valid, setValid] = useState(true);
    // const [containSpecial,setContainSpecial] = useState(true);
    const formData = (e) => {
        e.preventDefault();
        const confirm_password_error = document.getElementById('cp');
        const password_error = document.getElementById('password');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        const existingErrorCp = document.querySelector('.error-message');
        const existingErrorPassword = document.querySelector('.error-message');
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
        if (existingErrorPassword) {
            existingErrorPassword.remove();
            password_error.classList.remove('invalid');
        }
        if(!hasSpecialChar){
            password_error.insertAdjacentHTML('afterend','<div class="error-message">Password must contain a special character</div>');
            password_error.classList.add('invalid');
            return;
        }
        if (existingErrorCp) {
            existingErrorCp.remove();
            confirm_password_error.classList.remove('invalid');
        }
        if(password !== confirm_password){
            confirm_password_error.insertAdjacentHTML('afterend','<div class="error-message">Passwords do not match</div>');
            confirm_password_error.classList.add('invalid');
            return;
        }
        console.log(name,email,password,confirm_password)
    }
    return (
        <div id="wrapper">
            <Navbar/>
            <div class="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={formData} action="#" method="POST">
                <input id="name" type="text" name="name" placeholder="Full Name" required/>
                <input id="email" type="email" name="email" placeholder="Email" required/>
                <input id="password" type="password" name="password" placeholder="Password" required/>
                <input id="cp" type="password" name="confirm_password" placeholder="Confirm Password" required/>
                <select name="gender" required>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
            <div class="already-account">
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
    </div>
    <Footer/>
        </div>
    )
}
export default Signup;
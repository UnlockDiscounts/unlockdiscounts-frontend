import "../styles/Signup.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const nameElement = document.getElementById('name');
    function handleName(e){
        const value = e.target.value;
        const regex = /^[a-zA-Z\s]*$/;
          if(regex.test(value) || value === ''){
            setName(value);
          }
        
    }
    function handleEmail(e){
        // const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]*$/;
        const emailRegex = /^[a-z][a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]*$/;;
        const emailValue = e.target.value;
        if(emailRegex.test(emailValue) || emailValue === ''){
            setEmail(emailValue);
        }
    }
    const formData = (e) => {
        e.preventDefault();
        const confirm_password_error = document.getElementById('cp');
        const password_error = document.getElementById('password');
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        const existingErrorCp = document.querySelector('.error-message');
        const existingErrorPassword = document.querySelector('.error-message');
        // const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
        const hasSpecialChar = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}/.test(password);
        const passwordLengthRegex = /^.{8,}$/;


        if (existingErrorPassword) {
            existingErrorPassword.remove();
            password_error.classList.remove('invalid');
        }
        if(!passwordLengthRegex.test(password)){
            password_error.insertAdjacentHTML('afterend','<div class="error-message">Password must be at least 8 characters long</div>');
            password_error.classList.add('invalid');
            return;
        }
        if(!hasSpecialChar){
            password_error.insertAdjacentHTML('afterend','<div class="error-message">Password must contain a combination of special characters,capital and small letters and numbers</div>');
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
        // console.log(Name,Email,password,confirm_password)
    }
    return (
        <div id="wrapper">
            <Navbar/>
            <div class="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={formData} action="#" method="POST">
                <input id="name" type="text" name="name" placeholder="Full Name" required onChange={handleName} value={name}/>
                <input id="email" type="email" name="email" placeholder="Email" required onChange={handleEmail} value={email}/>
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
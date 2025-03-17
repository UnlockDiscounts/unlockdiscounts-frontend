import ForgotPassword from "./ForgotPassword";
import "../styles/Login.css";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Login = () => {
    const formdata = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
    }
    return (
        <div id="wrapper">
            <Navbar/>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={formdata} action="#" method="post">
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <button type="submit">Login</button>
                </form>
                <div class="forgot-password">
                    <Link to="/password_reset">Forgot Password?</Link>
                </div>
                <div class="sign-up">
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login;
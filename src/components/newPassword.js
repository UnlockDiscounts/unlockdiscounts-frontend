import Footer from "./Footer"
import Navbar from "./Navbar"
import '../styles/NewPassword.css';
const NewPassword = () => {
    const formData = (e)=>{
        e.preventDefault();
        const confirm_password_error = document.getElementById('cp');
        const password_error = document.getElementById('password');
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        const hasSpecialChar = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}/.test(password);
        const existingErrorCp = document.querySelector('.error-message');
        const existingErrorPassword = document.querySelector('.error-message');
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
    }
    return (
        <div>
            <div className="new-password-container">
                <h2>Forgot Password</h2>
                <form action="#" method="post" onSubmit={formData}>
                        <input id="password" type="password" name="password" placeholder="New Password" required />
                        <input id="cp" type="password" name="confirm_password" placeholder="Confirm Password" required />
                    <button type="submit" >Confirm</button>
                </form>
            </div>   
        </div>
    )
}
export default NewPassword;
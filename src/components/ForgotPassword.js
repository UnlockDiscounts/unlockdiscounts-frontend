import '../styles/ForgotPassword.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import NewPassword from './newPassword';
const ForgotPassword = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [countDown, setCountDown] = useState(10);
    const [sendOtp, setSendOtp] = useState(false);
    const [child, setChild] = useState(false);
    const [email, setEmail] = useState('');
    
    const handleEmail = (e) => {
        const emailRegex = /^[a-z][a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]*$/;
        const emailValue = e.target.value;
        if (emailRegex.test(emailValue) || emailValue === '') {
            setEmail(emailValue);
        }
    };
    const confirmOtp = (otp) => {
        setChild(!child);
        console.log(otp);
    }
    const resendOtp = () => {
        setCountDown(10);
        setIsDisabled(false);
    }
    const handleOtp = () => {
        setSendOtp(true);
    }
    const handleDelete = (e) => {
        if(e.key === 'Backspace'){
            const currentInput = e.target;
            const prevSibling = currentInput.previousElementSibling;
            const cursorPosition = currentInput.selectionStart;
            if(currentInput.value !== '' && cursorPosition === 0){
                currentInput.value = '';
                currentInput.focus();
            }
            else if (currentInput.value === '' && prevSibling) {
                 if (prevSibling) {
                     prevSibling.focus();
                }
                const length = prevSibling.value.length;
                prevSibling.setSelectionRange(length, length);
            }
        }
    }
    const handleInputChange = (e) => {
        const target = e.target;
        // const prevSibling = target.previousElementSibling;
        const nextSibling = target.nextElementSibling;
      
        if (target.value !== '') {
            if (nextSibling) {
                nextSibling.focus();
            }
        }
        const allInput = Array.from(e.target.parentNode.querySelectorAll('.otp-inputs input'));
        const otpValues = allInput.map(input => input.value);
        if(otpValues.every(val=>val !== '')){
            confirmOtp(otpValues);
        }


    }
    useEffect(() => {
        if (countDown >= 0) {
            const timer = setInterval(() => {
                setCountDown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        else {
            setIsDisabled(true)
        }
    }, [countDown])

    return (
        <div id="wrapper">
            <Navbar />
            {!child?<div>
            <div class="forgot-password-container">
                {!sendOtp && <div>
                    <h2>Forgot Password</h2>
                    <form action="/reset-password" method="POST">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handleEmail} value={email}/>
                        <button type="submit" onClick={handleOtp}>Send Otp</button>
                    </form>
                </div>}
                {sendOtp && <div class="otp-section">
                    <label for="otp">Enter OTP</label>
                    <div class="otp-inputs"  >
                        {Array.from({ length: 4 }).map((_, index) => (
                            <input
                            type="text"
                            maxlength="1"
                                required key={index}
                                onChange={e=>handleInputChange(e)}
                                onKeyDown={(e)=>handleDelete(e)}
                                onInput={(e) => {
                                    const value = e.target.value;
                                    if (!/^[0-9]?$/.test(value)) {
                                        e.target.value = '';
                                    }
                                }} />
                            )  
                        )}
                    </div>
                    <div class="otp-buttons">
                        {isDisabled && <button type="button" id="resend" onClick={resendOtp}>Resend OTP</button>}
                    </div>
                    {!isDisabled && <div class="timer" id="timer">{`Resend OTP in ${countDown}`}</div>}
                    <p><Link to="/login">Back to Login</Link></p>
                </div>}
            </div>
            </div>:
                <NewPassword/>}

            <Footer />
        </div>
    );
}
export default ForgotPassword;
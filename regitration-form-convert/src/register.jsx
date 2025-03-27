import React, { useState, useRef } from 'react';
import './register.css';

function Register() {
    const [signUpMode, setSignUpMode] = useState(false);
    const loginFormRef = useRef(null);
    const signupFormRef = useRef(null);

    const handleSignUpClick = () => {
        setSignUpMode(true);
    };

    const handleSignInClick = () => {
        setSignUpMode(false);
    };

    const validateForm = (e, formRef) => {
        e.preventDefault();
        let isValid = true;
        const form = formRef.current;
        const inputs = form.querySelectorAll('.form-control');

        inputs.forEach((input) => {
            const value = input.value.trim();
            input.classList.remove('is-invalid');

            if (input.id.includes('username') && value.length < 4) {
                input.classList.add('is-invalid');
                isValid = false;
            } else if (input.id.includes('email')) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    input.classList.add('is-invalid');
                    isValid = false;
                }
            } else if (input.id.includes('password')) {
                if (value.length < 5) {
                    input.classList.add('is-invalid');
                    isValid = false;
                }
                if (input.id.includes('confirm')) {
                    const passwordInput = form.querySelector('#signup-password');
                    if (passwordInput && value !== passwordInput.value) {
                        input.classList.add('is-invalid');
                        isValid = false;
                    }
                }
            }
        });

        if (isValid) {
            console.log('Form is valid, proceed with submission.');
        }
        return isValid;
    };

    const handleLoginSubmit = (e) => {
        if (validateForm(e, loginFormRef)) {
            console.log('Login form submitted');
        }
    };

    const handleSignupSubmit = (e) => {
        if (validateForm(e, signupFormRef)) {
            console.log('Signup form submitted');
        }
    };

    const handleInputFocus = (e) => {
        e.target.classList.remove('is-invalid');
    };

    return (
        <>
            <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        {/* Log In Form */}
                        <form
                            ref={loginFormRef}
                            onSubmit={handleLoginSubmit}
                            className="sign-in-form needs-validation"
                            id="login-form"
                            noValidate
                        >
                            <h2 className="title">Log in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="login-username"
                                    placeholder="Username"
                                    id="login-username"
                                    required
                                    onFocus={handleInputFocus}
                                />
                                <div className="invalid-tooltip">Please enter your username.</div>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="login-password"
                                    placeholder="Password"
                                    id="login-password"
                                    required
                                    onFocus={handleInputFocus}
                                />
                                <div className="invalid-tooltip">Please enter your password.</div>
                            </div>
                            <button className="btn btn-warning" name="btn-logIn" type="submit">
                                Log In
                            </button>
                        </form>

                        {/* Sign Up Form */}
                        <form
                            ref={signupFormRef}
                            onSubmit={handleSignupSubmit}
                            className="sign-up-form needs-validation"
                            id="signup-form"
                            noValidate
                        >
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="signup-username"
                                    placeholder="Username"
                                    id="signup-username"
                                    minLength="4"
                                    required
                                    onFocus={handleInputFocus}
                                />
                                <div className="invalid-tooltip">
                                    Username is too short (min. 4 characters).
                                </div>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="signup-email"
                                    placeholder="Email"
                                    id="signup-email"
                                    required
                                    onFocus={handleInputFocus}
                                />
                                <div className="invalid-tooltip">Please enter a valid email.</div>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="signup-password"
                                    className="form-control"
                                    placeholder="Password"
                                    id="signup-password"
                                    minLength="5"
                                    required
                                    onFocus={handleInputFocus}
                                />
                                <div className="invalid-tooltip">
                                    Password is too short (min. 5 characters).
                                </div>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="signup-confirm-password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    id="signup-confirm-password"
                                    required
                                    onFocus={handleInputFocus}
                                />
                                <div className="invalid-tooltip">Passwords do not match.</div>
                                <div className="valid-tooltip">Passwords match.</div>
                            </div>
                            <button className="btn btn-warning" name="btn-signUp" type="submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Panels for toggling between forms */}
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>
                                Sign up today and unlock exclusive access to our latest handmade
                                creations, special offers, and crochet inspiration. Let’s start
                                your creative journey!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                Sign up
                            </button>
                        </div>
                        <img
                            src="https://cdn.glitch.global/07297cd4-98ff-4c1e-ace0-9bcabfd3b515/su.svg?v=1740039407739"
                            className="image"
                            alt="svg"
                        />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>
                                Welcome back to your crochet haven! Log in to continue exploring our
                                latest collections, track your orders, and get inspired by new designs.
                                We are excited to have you back!
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </div>
                        <img
                            src="https://cdn.glitch.global/07297cd4-98ff-4c1e-ace0-9bcabfd3b515/lg.svg?v=1740039420177"
                            className="image"
                            alt="svg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;

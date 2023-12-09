import { useState } from "react";
import { Link } from "react-router-dom"
import './page-auth.css'
import { AuthWrapper } from "./AuthWrapper";

export const LoginPage = () => {
    const [formData, setFormData] = useState({
        password: '',
        email: '',
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };
    return (
        <AuthWrapper>
            <h4 className="mb-2">Welcome to Sneat! 👋</h4>
            <p className="mb-4">Please sign-in to your account and start the adventure</p>

            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={formData.name}
                        onChange={handleChange}
                        name="email"
                        placeholder="Enter your email or username"
                        autoFocus />
                </div>
                <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Link aria-label="Go to Forgot Password Page" to="/auth/forgot-password">
                            <small>Forgot Password?</small>
                        </Link>
                    </div>
                    <div className="input-group input-group-merge">
                        <input
                            type="password"
                            autoComplete="true"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password" />
                        <span className="input-group-text cursor-pointer"></span>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                    </div>
                </div>
                <div className="mb-3">
                    <button aria-label='Click me' className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
            </form>

            <p className="text-center">
                <span>New on our platform? </span>
                <Link aria-label="Go to Register Page" to='/auth/register' className="registration-link">
                    <span>Create an account</span>
                </Link>
            </p>

        </AuthWrapper>
    )
}
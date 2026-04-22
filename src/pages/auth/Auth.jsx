import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/layout/landing/nav/Nav';
import Footer from '../../components/layout/footer/Footer';
import './Auth.css';

const Auth = ({ type = 'login' }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLogin = type === 'login';
    const title = isLogin ? 'Welcome Back' : 'Create Account';
    const subtitle = isLogin 
        ? 'Enter your credentials to access your dashboard.' 
        : 'Enter your credentials to start engineering your wealth.';
    const buttonText = isLogin ? 'Sign In' : 'Create Account';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isLogin ? 'Login' : 'Register:', { email, password });
    };

    return (
        <>
            <div className="wallpaper-canvas"></div>
            <Nav />
            <main className="auth-wrapper">
                <div className="auth-card">
                    <header className="auth-header">
                        <Link to="/" className="auth-logo">KAYS</Link>
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </header>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary">
                            <span>{buttonText}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Auth;
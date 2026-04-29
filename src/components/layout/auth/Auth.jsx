import { useState } from 'react';
import Button from '../../ui/button/Button';
import './Auth.css';

{/** title, subtitle, buttonText */}
const Auth = ({ type }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
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
            <main className="auth-wrapper">
                <div className="auth-card">
                    <header className="auth-header">
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

                        {!isLogin && (
                            <div className="input-group">
                                <label htmlFor="">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        )}

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

                        <Button variant="primary" animation='animation'>
                            {buttonText}
                        </Button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Auth;
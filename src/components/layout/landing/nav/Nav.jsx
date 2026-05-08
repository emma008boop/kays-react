import { useEffect, useState } from 'react';
import Button from '../../../ui/button/Button';
import Logo from '../../../ui/logo/Logo';
import './Nav.css';

const Nav = ({ ruteLogin, ruteRegister }) => {
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const vh100 = window.innerHeight;
            setIsSticky(window.scrollY > vh100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`site-header ${isSticky ? 'is-sticky' : ''}`}>
            <nav className="nav-container">
                <Logo></Logo>     
                
                <div className="auth-controls">
                    <Button rute={ruteLogin} variant={isSticky ? 'contrast' : 'secondary'}>
                        Log in
                    </Button>
                    <Button variant='primary' rute={ruteRegister} animation='animation'>
                        Create account
                    </Button>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
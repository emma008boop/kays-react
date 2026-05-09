import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ activeRoute, onLogout }) => {
    const navItems = [
        { path: '/dashboard/home', icon: 'home', label: 'Home' },
        { path: '/dashboard/exercises', icon: 'dumbbell', label: 'Exercises' },
        { path: '/dashboard/routines', icon: 'calendar', label: 'Routines' },
        { path: '/dashboard/progress', icon: 'chart', label: 'Progress' },
    ];

    const getIcon = (name) => {
        const icons = {
            home: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
            dumbbell: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5h11M6.5 17.5h11M3.75 12h16.5M3.75 12l2.25-4.5M3.75 12l2.25 4.5M20.25 12l-2.25-4.5M20.25 12l-2.25 4.5" /></svg>,
            calendar: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
            chart: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>,
        };
        return icons[name] || null;
    };

    return (
        <nav className="side-nav">
            <div className="nav-brand">
                <Link to="/" className="logo">
                    K<span>AYS</span>
                </Link>
            </div>

            <div className="nav-links">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${activeRoute === item.path ? 'active' : ''}`}
                    >
                        {getIcon(item.icon)}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>

            <div className="nav-user" onClick={onLogout}>
                <img src="https://via.placeholder.com/32" alt="User" />
                <span>Logout</span>
            </div>
        </nav>
    );
};

export default Navbar;
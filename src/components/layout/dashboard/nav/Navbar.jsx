import { Link } from 'react-router-dom';
import Logo from '../../../ui/logo/Logo';
import addIcon from '../nav/../../../../assets/icons/add-icon.svg';
import graphIcon from '../nav/../../../../assets/icons/graph-icon.svg';
import userIcon from '../nav/../../../../assets/icons/user-icon.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="side-nav">
            <div className="nav-brand">
                <Logo></Logo>
            </div>
            <ul className='nav-links'>
                <li className='nav-item'>
                    <Link to="/graficas">
                        <img src={graphIcon} alt="Gráficas" />
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/agregar">
                        <img src={addIcon} alt="Agregar nuevo" />
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/perfil">
                        <img src={userIcon} alt="Perfil de usuario" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
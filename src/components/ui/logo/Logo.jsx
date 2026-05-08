import { Link } from 'react-router-dom';
import logoImg from '../../../assets/img/brand/no_background.png';
import './Logo.css';

const Logo = () => {
    return (
        <Link to="/" className="brand-logo">
            <img src={logoImg} alt="Nombre de tu Marca" />
        </Link>
    );
}

export default Logo;
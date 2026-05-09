import { useNavigate } from 'react-router-dom';
import './Buttons.css';

const Button = ({children, variant, animation = 'none', onClick, rute}) => {
    const navigate = useNavigate();
    const className = `btn-${variant} btn-${animation}`;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        navigate(rute);
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
import './Buttons.css';

const Button = ({children, variant, animation = 'none', onClick}) => {
    const className = `btn-${variant} btn-${animation}`;

    return (
        <button className={className}  onClick = {onClick}>
            {children}
        </button>
    );
};

export default Button;
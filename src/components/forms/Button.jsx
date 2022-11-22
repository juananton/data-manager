import style from './Button.module.css';

const Button = ({ className, children }) => {
	return (
		<button className={`${style.button} ${className || ''}`}>{children}</button>
	);
};

export default Button;

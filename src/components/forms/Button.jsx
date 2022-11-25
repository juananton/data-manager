import style from './Button.module.css';

const BTN_TYPES = {
	text: style.text,
	icon: style.icon
};
const BTN_USES = {
	primary: style.primary,
	secondary: style.secondary,
	disabled: style.disabled
};

const Button = ({ type = 'text', use = 'secondary', className, ...props }) => {
	const btnType = BTN_TYPES[type];
	const btnUse = BTN_USES[use];

	return (
		<button
			{...props} // includes children
			onClick={props.onClick}
			className={`${style.button} ${btnType} ${btnUse} ${className} || ''`}
		></button>
	);
};

export default Button;

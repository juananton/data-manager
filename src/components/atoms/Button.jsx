import style from './Button.module.css';

const BTN_VARIANTS = {
	text: style.text,
	icon: style.icon
};
const BTN_USES = {
	primary: style.primary,
	secondary: style.secondary,
	disabled: style.disabled
};

const Button = ({
	variant = 'text',
	use = 'secondary',
	className,
	...props
}) => {
	const btnVariant = BTN_VARIANTS[variant];
	const btnUse = BTN_USES[use];

	return (
		<button
			{...props} // includes children
			className={`${style.button} ${btnVariant} ${btnUse} ${className} || ''`}
		></button>
	);
};

export default Button;

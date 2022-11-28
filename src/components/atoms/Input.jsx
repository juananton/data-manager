import style from './Input.module.css';

const Input = ({ label, error, className, ...props }) => {
	return (
		<label className={className || ''}>
			<span className={style.label}>{label}</span>
			<input
				{...props}
				className={`${style.input} ${error ? style.error : ''}`}
			/>
			<span className={style.errorText}>{error}</span>
		</label>
	);
};

export default Input;

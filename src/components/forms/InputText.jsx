import style from './InputText.module.css';

const InputText = ({ label, error, className, ...props }) => {
	return (
		<label className={className || ''}>
			<span className={style.label}>{label}</span>
			<input
				{...props}
				className={`${style.input} ${error ? style.error : ''}`}
				type='text'
			/>
			<span className={style.errorText}>{error}</span>
		</label>
	);
};

export default InputText;

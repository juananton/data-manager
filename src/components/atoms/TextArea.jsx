import style from './TextArea.module.css';

const TextArea = ({ label, error, className, ...props }) => {
	return (
		<label className={className || ''}>
			<span className={style.label}>{label}</span>
			<textarea
				cols='30'
				rows='10'
				{...props}
				className={`${style.textarea} ${error ? style.error : ''}`}
			></textarea>

			<span className={style.errorText}>{error}</span>
		</label>
	);
};

export default TextArea;

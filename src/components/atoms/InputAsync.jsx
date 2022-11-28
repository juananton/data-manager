import CheckCircleIcon from '../icons/CheckCircleIcon';
import CrossCircleIcon from '../icons/CrossCircleIcon';
import UpdateIcon from '../icons/UpdateIcon.jsx';
import style from './InputAsync.module.css';

const InputAsync = ({
	label,
	loading,
	success,
	error,
	className,
	...props
}) => {
	const icon = getIcon(loading, success, error);
	return (
		<label className={className || ''}>
			<span className={style.label}>{label}</span>
			<div className={style.wrapper}>
				<input
					{...props}
					className={`${style.input} ${error ? style.errorInput : ''} ${
						success ? style.successInput : ''
					}`}
				/>
				{icon}
			</div>
			<span className={style.errorText}>{error}</span>
		</label>
	);
};

const getIcon = (loading, success, error) => {
	if (loading)
		return <UpdateIcon className={`${style.icon} ${style.loadingIcon}`} />;

	if (success)
		return <CheckCircleIcon className={`${style.icon} ${style.successIcon}`} />;

	if (error)
		return <CrossCircleIcon className={`${style.icon} ${style.errorIcon}`} />;
};

export default InputAsync;

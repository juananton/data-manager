import ArrowDownIcon from '../icons/ArrowDownIcon.jsx';
import style from './Select.module.css';

const LABEL_DISPLAY = {
	top: style.labelTop,
	left: style.labelLeft,
	none: style.labelNone
};

const Select = ({ label, labelDisplay = 'top', className, ...props }) => {
	const display = LABEL_DISPLAY[labelDisplay];

	return (
		<label className={`${display} ${className} || ''`}>
			<span className={style.label}>{label}</span>
			<div className={style.wrapper}>
				<select className={style.select} {...props}></select>
				<ArrowDownIcon className={style.icon} />
			</div>
		</label>
	);
};

export default Select;

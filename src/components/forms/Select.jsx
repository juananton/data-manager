import ArrowDownIcon from '../Icons/ArrowDownIcon.jsx';
import style from './Select.module.css';

const Select = ({ className, ...props }) => (
	<div className={`${style.wrapper} ${className || ''}`}>
		<select className={style.select} {...props}></select>
		<ArrowDownIcon className={style.icon} />
	</div>
);

export default Select;

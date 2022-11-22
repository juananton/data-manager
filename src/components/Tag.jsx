import style from './Tag.module.css';

const Tag = ({ className, children }) => {
	return <span className={`${style.tag} ${className || ''}`}>{children}</span>;
};

export default Tag;

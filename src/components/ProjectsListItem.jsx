import style from './ProjectsListItem.module.css';

const ProjectsListItem = ({ name, category, date }) => {
	const CATEGORY_STYLES = {
		React: style.react,
		'Vanilla JS': style.javascript,
		'Node.js': style.node,
		Other: style.other
	};

	const categoryClassName = CATEGORY_STYLES[category] || CATEGORY_STYLES.Other;

	return (
		<div className={style.listItem}>
			<input className={style.check} type='checkbox' />
			<div className={`${style.name}`}>{name}</div>
			<div className={`${style.category} ${categoryClassName}`}>{category}</div>
			<div className={style.date}>{date}</div>
		</div>
	);
};

export default ProjectsListItem;

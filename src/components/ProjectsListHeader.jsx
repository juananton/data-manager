import style from './ProjectsListHeader.module.css';

const ProjectsListHeader = () => {
	return (
		<div className={style.listHeader}>
			<input className={style.check} type='checkbox' />
			<div className={style.name}>Name</div>
			<div className={style.category}>Category</div>
			<div className={style.date}>Date</div>
		</div>
	);
};
export default ProjectsListHeader;

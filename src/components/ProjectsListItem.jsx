import style from './ProjectsListItem.module.css';

const ProjectsListItem = ({ project }) => (
	<li className={style.listItem}>
		<input className={style.check} type='checkbox' />
		{`${project.name}. ${project.type}.
		${project.date}`}
	</li>
);

export default ProjectsListItem;

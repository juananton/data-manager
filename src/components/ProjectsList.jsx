import { useState } from 'react';
import style from './ProjectsList.module.css';
import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ initialProjects }) => {
	const [type, setType] = useState('all');

	const filterProjects = e => {
		setType(e.target.value);
	};

	const displayProjects =
		type === 'all'
			? initialProjects
			: initialProjects.filter(project => project.type === type);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Projects</h1>
			<label htmlFor='filterByType'>Filter by: </label>
			<select onChange={filterProjects} id='filterByType'>
				<option value='all' defaultValue>
					All
				</option>
				<option value='React'>React</option>
				<option value='javaScript'>javaScript</option>
			</select>
			<ul className={style.projectsList}>
				{displayProjects.map(project => (
					<ProjectsListItem project={project} key={project.name} />
				))}
			</ul>
		</div>
	);
};

export default ProjectsList;

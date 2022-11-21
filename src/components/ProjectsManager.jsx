import { useState } from 'react';
import ProjectsList from './ProjectsList';
import ProjectsListHeader from './ProjectsListHeader';
import style from './ProjectsManager.module.css';
import Toolbar from './Toolbar';

const ProjectsManager = ({ initialProjects }) => {
	const [filterCriteria, setFilterCriteria] = useState('all');
	const [sortCriteria, setSortCriteria] = useState(0);

	let filteredProjects = filterProjects(initialProjects, filterCriteria);
	filteredProjects = sortProjects(filteredProjects, sortCriteria);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Projects</h1>
			<Toolbar
				filterCriteria={filterCriteria}
				setFilterCriteria={setFilterCriteria}
				sortCriteria={sortCriteria}
				setSortCriteria={setSortCriteria}
			/>
			<ProjectsListHeader />
			<ProjectsList projects={filteredProjects} />
		</div>
	);
};

const sortProjects = (projects, sortCriteria) => {
	switch (sortCriteria) {
		case 0:
			return [...projects].sort((a, b) => {
				// [..projetcs] Create a copy of projects because the sort() method modifies the original array.
				if (a.date < b.date) return 1;
				if (a.date > b.date) return -1;
				return 0;
			});
		case 1:
			return projects.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case 2:
			return projects.sort((a, b) => {
				if (a.category < b.category) return 1;
				if (a.category > b.category) return -1;
				return 0;
			});
		default:
			return projects;
	}
};

const filterProjects = (projects, filterCriteria) => {
	let filteredProjects;
	filterCriteria === 'all'
		? (filteredProjects = projects)
		: (filteredProjects = projects.filter(
				project => project.category === filterCriteria
		  ));

	return filteredProjects;
};

export default ProjectsManager;

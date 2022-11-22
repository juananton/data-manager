import { useState } from 'react';
import { CATEGORIES } from '../lib/constants/categories';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import { filterProjects, sortProjects } from '../lib/Functions/filterProjects';
import ProjectsList from './ProjectsList';
import ProjectsListHeader from './ProjectsListHeader';
import style from './ProjectsManager.module.css';
import Toolbar from './Toolbar';

const ProjectsManager = ({ initialProjects }) => {
	const [filterCriteria, setFilterCriteria] = useState(CATEGORIES.ALL);
	const [sortCriteria, setSortCriteria] = useState(SORT_OPTIONS.DATE);

	let projects = filterProjects(initialProjects, filterCriteria);
	projects = sortProjects(projects, sortCriteria);

	return (
		<>
			<div className={style.pageHeader}>
				<div className={style.wrapper}>
					<h1 className={style.title}>Projects manager</h1>
				</div>
			</div>
			<div className={style.wrapper}>
				<Toolbar
					filterCriteria={filterCriteria}
					setFilterCriteria={setFilterCriteria}
					sortCriteria={sortCriteria}
					setSortCriteria={setSortCriteria}
				/>
				<ProjectsListHeader />
				<ProjectsList projects={projects} />
			</div>
		</>
	);
};

export default ProjectsManager;

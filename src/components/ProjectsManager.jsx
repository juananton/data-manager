import { useState } from 'react';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import {
	filterItems,
	paginateItems,
	sortItems
} from '../lib/Functions/filterProjects';
import Pagination from './Pagination';
import ProjectsList from './ProjectsList';
import ProjectsListHeader from './ProjectsListHeader';
import style from './ProjectsManager.module.css';
import Toolbar from './Toolbar';

const ProjectsManager = ({ initialProjects }) => {
	// STATES
	const [filterCriteria, setFilterCriteria] = useState('all');
	const [sortCriteria, setSortCriteria] = useState(SORT_OPTIONS.DATE);
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);

	// GET PROJECTS
	let projects = filterItems(initialProjects, filterCriteria);
	projects = sortItems(projects, sortCriteria);

	const totalPages = Math.ceil(projects.length / itemsPerPage);

	projects = paginateItems(projects, page, itemsPerPage);

	if (projects.length === 0) return <p>No projects</p>;

	// Prevents the page is larger than the total number of pages when changing the items per page
	page > totalPages && setPage(1);

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
				<ProjectsList projects={projects} itemsPerPage={itemsPerPage} />
				<Pagination
					page={page}
					itemsPerPage={itemsPerPage}
					setPage={setPage}
					setItemsPerPage={setItemsPerPage}
					totalPages={totalPages}
				/>
			</div>
		</>
	);
};

export default ProjectsManager;

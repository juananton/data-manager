import { useEffect, useState } from 'react';
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

	// SIDE EFFECTS
	// Prevents that the page value could be larger than the total number of pages when changing the items per page and goes always to page 1 when there are no items to display.
	useEffect(() => {
		if (page > totalPages) return setPage(1);
	}, [page, totalPages]);

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

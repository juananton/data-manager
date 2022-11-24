import { useEffect, useState } from 'react';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import {
	filterData,
	paginateData,
	sortData
} from '../lib/Functions/filterProjects';
import style from './DataManager.module.css';
import ProjectsListHeader from './ItemsListHeader';
import ProjectsList from './List';
import Pagination from './Pagination';
import Toolbar from './Toolbar';

const DataManager = () => {
	// STATES
	const [filterCriteria, setFilterCriteria] = useState('all');
	const [sortCriteria, setSortCriteria] = useState(SORT_OPTIONS.DATE);
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [data, setData] = useState([]);

	// GET PROJECTS DATA FROM THE API
	const fetchProjects = async setData => {
		const res = await fetch('http://localhost:4000/projects');
		const apiData = await res.json();
		setData(apiData);
	};

	useEffect(() => {
		fetchProjects(setData);
	}, []);

	// GET FILTERED PROJECTS
	let filteredData = filterData(data, filterCriteria);
	filteredData = sortData(filteredData, sortCriteria);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	filteredData = paginateData(filteredData, page, itemsPerPage);

	// Prevents that the page value could be larger than the total number of pages when changing the items per page and goes always to page 1 when there are no items to display.
	useEffect(() => {
		if (page > totalPages) return setPage(1);
	}, [page, totalPages]);

	return (
		<>
			<div className={style.pageHeader}>
				<div className={style.wrapper}>
					<h1 className={style.title}>Data manager</h1>
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
				<ProjectsList items={filteredData} itemsPerPage={itemsPerPage} />
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

export default DataManager;

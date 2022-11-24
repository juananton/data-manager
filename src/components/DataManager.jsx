import { useEffect, useState } from 'react';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import {
	filterData,
	paginateData,
	sortData
} from '../lib/Functions/manageData';
import style from './DataManager.module.css';
import List from './List';
import ListHeader from './ListHeader';
import Pagination from './Pagination';
import Toolbar from './Toolbar';

const DataManager = () => {
	// STATES
	const [filterCriteria, setFilterCriteria] = useState('all');
	const [sortCriteria, setSortCriteria] = useState(SORT_OPTIONS.DATE);
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [rawData, setRawData] = useState([]);

	// GET RAW DATA FROM THE API
	const fetchData = async (setRawData, signal) => {
		const res = await fetch('http://localhost:4000/projects', { signal });
		const apiData = await res.json();
		setRawData(apiData);
	};

	useEffect(() => {
		const controller = new AbortController();
		fetchData(setRawData, controller.signal);
		return () => controller.abort();
	}, []);

	// DISPLAY DATA
	let data = filterData(rawData, filterCriteria);
	data = sortData(data, sortCriteria);
	const { paginatedData, totalPages } = paginateData(data, page, itemsPerPage);
	data = paginatedData;

	// Prevents that the page value could be larger than the total number of pages when changing the items per page.
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
				<ListHeader />
				<List data={data} itemsPerPage={itemsPerPage} />
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

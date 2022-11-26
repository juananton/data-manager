import { useEffect, useState } from 'react';
import { DATA_FORMS } from '../lib/constants/forms';
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
	const { currentForm, setCurrentForm } = useForm();
	const { filter, sort, setFilter, setSort } = useDisplayCriteria();

	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);

	const [rawData, setRawData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	// GET RAW DATA FROM THE API
	const fetchData = async (setRawData, setError, setLoading, signal) => {
		try {
			const res = await fetch('http://localhost:4000/projects', { signal });
			if (res.ok) {
				const data = await res.json();
				setRawData(data);
			} else {
				setError(true);
			}
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		fetchData(setRawData, setError, setLoading, controller.signal);
		return () => controller.abort();
	}, []);

	// ITEMS TO DISPLAY
	let itemsToDisplay = filterData(rawData, filter);
	itemsToDisplay = sortData(itemsToDisplay, sort);
	const { paginatedData, totalPages } = paginateData(
		itemsToDisplay,
		page,
		itemsPerPage
	);
	itemsToDisplay = paginatedData;

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
				{currentForm === DATA_FORMS.FILTER ? (
					<Toolbar
						filter={filter}
						setFilter={setFilter}
						sort={sort}
						setSort={setSort}
						setCreateForm={setCurrentForm}
					/>
				) : (
					<p>Create Form</p>
				)}
				<ListHeader />
				<List
					itemsToDisplay={itemsToDisplay}
					itemsPerPage={itemsPerPage}
					error={error}
					loading={loading}
				/>
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

const useDisplayCriteria = () => {
	const [displayCriteria, setDisplayCriteria] = useState({
		filter: 'all',
		sort: SORT_OPTIONS.DATE
	});
	const setFilter = newFilter =>
		setDisplayCriteria({
			...displayCriteria,
			filter: newFilter
		});

	const setSort = newSort =>
		setDisplayCriteria({ ...displayCriteria, sort: newSort });

	return { ...displayCriteria, setFilter, setSort };
};

const useForm = () => {
	const [currentForm, setCurrentForm] = useState(DATA_FORMS.FILTER);

	const setFilterForm = () => setCurrentForm(DATA_FORMS.FILTER);
	const setCreateForm = () => setCurrentForm(DATA_FORMS.CREATE);
	const setEditForm = () => setCurrentForm(DATA_FORMS.EDIT);
	const setDeleteForm = () => setCurrentForm(DATA_FORMS.DELETE);

	return {
		currentForm,
		setFilterForm,
		setCreateForm,
		setEditForm,
		setDeleteForm
	};
};

export default DataManager;

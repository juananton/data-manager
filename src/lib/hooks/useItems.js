import { useEffect, useState } from 'react';
import { filterData, paginateData, sortData } from '../functions/manageData';

// GET DATA FROM THE API
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

// GET ITEMS TO DISPLAY
const getItemsToDisplay = (rawData, filter, sort, page, itemsPerPage) => {
	let itemsToDisplay = filterData(rawData, filter);
	itemsToDisplay = sortData(itemsToDisplay, sort);
	const { paginatedData, totalPages } = paginateData(
		itemsToDisplay,
		page,
		itemsPerPage
	);
	itemsToDisplay = paginatedData;

	return { itemsToDisplay, totalPages };
};

//  DISPLAY ITEMS
export const useItems = (filter, sort, page, itemsPerPage, setPage) => {
	const [rawData, setRawData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		fetchData(setRawData, setError, setLoading, controller.signal);
		return () => controller.abort();
	}, []);

	const { itemsToDisplay, totalPages } = getItemsToDisplay(
		rawData,
		filter,
		sort,
		page,
		itemsPerPage
	);

	// Prevents that the page value could be larger than the total number of pages when changing the items per page.
	useEffect(() => {
		if (page > totalPages) return setPage(1);
	});

	return { itemsToDisplay, totalPages, error, loading };
};

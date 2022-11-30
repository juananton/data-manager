import { useEffect, useState } from 'react';
import { getData } from '../api/dataApi';
import { filterData, paginateData, sortData } from '../functions/filterData';

// GET ALL DATA FROM THE API
const loadData = async (setAllItems, setError, signal) => {
	const { data, aborted } = await getData(signal);
	if (aborted) return;
	if (data) setAllItems(data);
	else setError();
};

// GET ITEMS TO DISPLAY
const getItemsToDisplay = (allItems, filter, sort, page, itemsPerPage) => {
	let itemsToDisplay = filterData(allItems, filter);
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
	const [items, setItems] = useState({
		allItems: [],
		error: false,
		loading: true
	});

	const setAllItems = newAllItems =>
		setItems({
			allItems: newAllItems,
			loading: false,
			error: false
		});

	const setError = () =>
		setItems({
			allItems: [],
			loading: false,
			error: true
		});

	useEffect(() => {
		const controller = new AbortController();
		loadData(setAllItems, setError, controller.signal);
		return () => controller.abort();
	}, []);

	const { itemsToDisplay, totalPages } = getItemsToDisplay(
		items.allItems,
		filter,
		sort,
		page,
		itemsPerPage
	);

	// Prevents that the page value could be larger than the total number of pages when changing the items per page.
	useEffect(() => {
		if (page > totalPages) return setPage(1);
	});

	return {
		itemsToDisplay,
		totalPages,
		error: items.error,
		loading: items.loading
	};
};

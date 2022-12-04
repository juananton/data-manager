import { useState } from 'react';
import { SORT_OPTIONS } from '../constants/sortOptions';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		filterBy: 'all',
		sortBy: SORT_OPTIONS.DATE,
		page: 1,
		itemsPerPage: 5
	});
	const setFilterBy = newFilterBy =>
		setFilters({
			...filters,
			filterBy: newFilterBy,
			page: 1
		});

	const setSortBy = newSortBy =>
		setFilters({
			...filters,
			sortBy: newSortBy,
			page: 1
		});

	const setPage = newPage =>
		setFilters({
			...filters,
			page: newPage
		});

	const setItemsPerPage = newItemsPerPage =>
		setFilters({
			...filters,
			itemsPerPage: newItemsPerPage,
			page: 1
		});

	return {
		filters,
		setFilterBy,
		setSortBy,
		setPage,
		setItemsPerPage
	};
};

import { useState } from 'react';
import { SORT_OPTIONS } from '../constants/sortOptions';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		filterBy: 'all',
		sortBy: SORT_OPTIONS.YEAR,
		page: 1,
		itemsPerPage: 5
	});
	const setFilterBy = newFilterBy =>
		setFilters({
			...filters,
			filterBy: newFilterBy
		});

	const setSortBy = newSortBy => setFilters({ ...filters, sortBy: newSortBy });

	const setPage = newPage => setFilters({ ...filters, page: newPage });

	const setItemsPerPage = newItemsPerPage =>
		setFilters({ ...filters, itemsPerPage: newItemsPerPage });

	return { ...filters, setFilterBy, setSortBy, setPage, setItemsPerPage };
};

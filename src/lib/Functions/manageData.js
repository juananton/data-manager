import { SORT_OPTIONS } from '../constants/sortOptions';

export const sortData = (items, criteria) => {
	switch (criteria) {
		case SORT_OPTIONS.DATE:
			return [...items].sort((a, b) => {
				// [..items] Create a copy of projects because the sort() method modifies the original array.
				if (a.date < b.date) return 1;
				if (a.date > b.date) return -1;
				return 0;
			});
		case SORT_OPTIONS.NAME:
			return [...items].sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case SORT_OPTIONS.CATEGORY:
			return [...items].sort((a, b) => {
				if (a.category < b.category) return 1;
				if (a.category > b.category) return -1;
				return 0;
			});
		default:
			return items;
	}
};

export const filterData = (items, criteria) => {
	let filteredItems;
	criteria === 'all'
		? (filteredItems = items)
		: (filteredItems = items.filter(item => item.category === criteria));
	return filteredItems;
};

export const paginateData = (items, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const totalPages = Math.ceil(items.length / itemsPerPage);
	const paginatedData = items.slice(startIndex, endIndex);

	return { paginatedData, totalPages };
};

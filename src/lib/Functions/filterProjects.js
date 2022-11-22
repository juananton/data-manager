import { CATEGORIES } from '../constants/categories';
import { SORT_OPTIONS } from '../constants/sortOptions';

export const sortItems = (items, criteria) => {
	switch (criteria) {
		case SORT_OPTIONS.DATE:
			return [...items].sort((a, b) => {
				// [..projetcs] Create a copy of projects because the sort() method modifies the original array.
				if (a.date < b.date) return 1;
				if (a.date > b.date) return -1;
				return 0;
			});
		case SORT_OPTIONS.NAME:
			return items.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case SORT_OPTIONS.CATEGORY:
			return items.sort((a, b) => {
				if (a.category < b.category) return 1;
				if (a.category > b.category) return -1;
				return 0;
			});
		default:
			return items;
	}
};

export const filterItems = (items, criteria) => {
	let filteredItems;
	criteria === CATEGORIES.ALL
		? (filteredItems = items)
		: (filteredItems = items.filter(item => item.category === criteria));

	return filteredItems;
};

export const paginateItems = (items, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return items.slice(startIndex, endIndex);
};

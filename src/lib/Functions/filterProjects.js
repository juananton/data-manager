import { CATEGORIES } from '../constants/categories';
import { SORT_OPTIONS } from '../constants/sortOptions';

export const sortProjects = (projects, criteria) => {
	switch (criteria) {
		case SORT_OPTIONS.DATE:
			return [...projects].sort((a, b) => {
				// [..projetcs] Create a copy of projects because the sort() method modifies the original array.
				if (a.date < b.date) return 1;
				if (a.date > b.date) return -1;
				return 0;
			});
		case SORT_OPTIONS.NAME:
			return projects.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case SORT_OPTIONS.CATEGORY:
			return projects.sort((a, b) => {
				if (a.category < b.category) return 1;
				if (a.category > b.category) return -1;
				return 0;
			});
		default:
			return projects;
	}
};

export const filterProjects = (projects, criteria) => {
	let filteredProjects;
	criteria === CATEGORIES.ALL
		? (filteredProjects = projects)
		: (filteredProjects = projects.filter(
				project => project.category === criteria
		  ));

	return filteredProjects;
};

import {
	filterData,
	paginateData,
	sortData
} from '../lib/functions/filterData';
import { useFilters } from '../lib/hooks/useFilters';
import { useItems } from '../lib/hooks/useItems';
import style from './DataManager.module.css';
import List from './List';
import ListHeader from './ListHeader';
import Pagination from './Pagination';
import Toolbar from './Toolbar';

const DataManager = () => {
	const { filters, setFilterBy, setSortBy, setPage, setItemsPerPage } =
		useFilters();

	const { items, error, loading } = useItems();

	const { itemsToDisplay, totalPages } = getItemsToDisplay(items, filters);

	return (
		<>
			<div className={style.pageHeader}>
				<div className={style.wrapper}>
					<h1 className={style.title}>Data manager</h1>
				</div>
			</div>

			<div className={style.wrapper}>
				<Toolbar
					filterBy={filters.filterBy}
					setFilterBy={setFilterBy}
					sortBy={filters.sortBy}
					setSortBy={setSortBy}
				/>

				<ListHeader />
				<List
					itemsToDisplay={itemsToDisplay}
					itemsPerPage={filters.itemsPerPage}
					error={error}
					loading={loading}
				/>
				<Pagination
					page={filters.page}
					itemsPerPage={filters.itemsPerPage}
					setPage={setPage}
					setItemsPerPage={setItemsPerPage}
					totalPages={totalPages}
				/>
			</div>
		</>
	);
};

// GET ITEMS TO DISPLAY
const getItemsToDisplay = (items, { filterBy, sortBy, page, itemsPerPage }) => {
	let itemsToDisplay = filterData(items, filterBy);
	itemsToDisplay = sortData(itemsToDisplay, sortBy);
	const { paginatedData, totalPages } = paginateData(
		itemsToDisplay,
		page,
		itemsPerPage
	);
	itemsToDisplay = paginatedData;

	return { itemsToDisplay, totalPages };
};

export default DataManager;

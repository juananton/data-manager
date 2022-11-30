import { useFilters } from '../lib/hooks/useFilters';
import { useItems } from '../lib/hooks/useItems';
import style from './DataManager.module.css';
import List from './List';
import ListHeader from './ListHeader';
import Pagination from './Pagination';
import Toolbar from './Toolbar';

const DataManager = () => {
	const {
		filterBy,
		sortBy,
		page,
		itemsPerPage,
		setFilterBy,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { itemsToDisplay, totalPages, error, loading } = useItems(
		filterBy,
		sortBy,
		page,
		itemsPerPage,
		setPage
	);

	return (
		<>
			<div className={style.pageHeader}>
				<div className={style.wrapper}>
					<h1 className={style.title}>Data manager</h1>
				</div>
			</div>

			<div className={style.wrapper}>
				<Toolbar
					filterBy={filterBy}
					setFilterBy={setFilterBy}
					sortBy={sortBy}
					setSortBy={setSortBy}
				/>

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

export default DataManager;

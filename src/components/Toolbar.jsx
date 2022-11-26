import { CATEGORIES } from '../lib/constants/categories';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import Button from './forms/Button';
import Select from './forms/Select';
import style from './Toolbar.module.css';

const Toolbar = ({
	filterBy,
	setFilterBy,
	sortBy,
	setSortBy,
	setCurrentForm
}) => {
	return (
		<div className={style.toolbar}>
			<div className={style.filters}>
				<Select
					className={style.filterSelect}
					value={filterBy}
					labelDisplay='left'
					label='Filter by'
					onChange={e => setFilterBy(e.target.value)}
				>
					<option value='all'>All</option>
					{Object.values(CATEGORIES).map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</Select>
				<Select
					className={style.filterSelect}
					value={sortBy}
					labelDisplay='left'
					label='Sort by'
					onChange={e => setSortBy(+e.target.value)}
				>
					<option value={SORT_OPTIONS.DATE}>Date</option>
					<option value={SORT_OPTIONS.NAME}>Name</option>
					{filterBy === 'all' && (
						<option value={SORT_OPTIONS.CATEGORY}>Category</option>
					)}
				</Select>
			</div>
			{
				<Button use='primary' onClick={setCurrentForm}>
					New Item
				</Button>
			}
		</div>
	);
};

export default Toolbar;

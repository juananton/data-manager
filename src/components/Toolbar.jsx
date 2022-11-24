import { CATEGORIES } from '../lib/constants/categories';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import Button from './forms/Button';
import Select from './forms/Select';
import style from './Toolbar.module.css';

const Toolbar = ({
	filterCriteria,
	setFilterCriteria,
	sortCriteria,
	setSortCriteria
}) => {
	return (
		<div className={style.toolbar}>
			<div className={style.filters}>
				<div className={style.formControl}>
					<label htmlFor='filterBy'>Filter by: </label>
					<Select
						value={filterCriteria}
						id='filterBy'
						onChange={e => setFilterCriteria(e.target.value)}
					>
						<option value='all'>All</option>
						{Object.values(CATEGORIES).map(category => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</Select>
				</div>
				<div className={style.formControl}>
					<label htmlFor='sortBy'>Order by: </label>
					<Select
						value={sortCriteria}
						id='sortBy'
						onChange={e => setSortCriteria(+e.target.value)}
					>
						<option value={SORT_OPTIONS.DATE}>Date</option>
						<option value={SORT_OPTIONS.NAME}>Name</option>
						{filterCriteria === 'all' && (
							<option value={SORT_OPTIONS.CATEGORY}>Category</option>
						)}
					</Select>
				</div>
			</div>
			<Button use='primary'>New Project</Button>
		</div>
	);
};

export default Toolbar;

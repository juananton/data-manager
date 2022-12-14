import { Link } from 'react-router-dom';
import { CATEGORIES } from '../lib/constants/categories';
import { SORT_OPTIONS } from '../lib/constants/sortOptions';
import Button from './atoms/Button';
import Select from './atoms/Select';
import style from './Toolbar.module.css';

const Toolbar = ({ filterBy, setFilterBy, sortBy, setSortBy }) => {
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
			<Link to='/createitem'>{<Button use='primary'>Create item</Button>}</Link>
		</div>
	);
};

export default Toolbar;

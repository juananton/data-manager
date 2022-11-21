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
				<div className={style.filter}>
					<label htmlFor='filterBy'>Filter by: </label>
					<select
						value={filterCriteria}
						id='filterBy'
						onChange={e => setFilterCriteria(e.target.value)}
					>
						<option value='all'>All</option>
						<option value='React'>React</option>
						<option value='Vanilla JS'>Vanilla JS</option>
						<option value='Node.js'>Node.js</option>
					</select>
				</div>
				<div className={style.sort}>
					<label htmlFor='sortBy'>Order by: </label>
					<select
						value={sortCriteria}
						id='sortBy'
						onChange={e => setSortCriteria(+e.target.value)}
					>
						<option value={0}>Date</option>
						<option value={1}>Name</option>
						<option value={2}>Category</option>
					</select>
				</div>
			</div>
			<button>New Project</button>
		</div>
	);
};

export default Toolbar;

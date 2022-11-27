import PageSelector from './atoms/PageSelector';
import Select from './atoms/Select';
import style from './Pagination.module.css';

const Pagination = ({
	page,
	setPage,
	itemsPerPage,
	setItemsPerPage,
	totalPages
}) => {
	return (
		<div className={style.pagination}>
			<div className={style.itemsPerPageSelector}>
				<Select
					labelDisplay='none'
					value={itemsPerPage}
					onChange={e => {
						setItemsPerPage(Number(e.target.value));
					}}
				>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={5}>5</option>
				</Select>
				<p>Items per page</p>
			</div>
			<PageSelector page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};

export default Pagination;

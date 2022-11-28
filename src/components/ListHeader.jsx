import style from './ListHeader.module.css';

const ListHeader = () => {
	return (
		<div className={style.listHeader}>
			<div className={style.name}>Name</div>
			<div className={style.id}>ID</div>
			<div className={style.category}>Category</div>
			<div className={style.year}>Year</div>
		</div>
	);
};
export default ListHeader;

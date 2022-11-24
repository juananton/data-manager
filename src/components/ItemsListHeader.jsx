import style from './ItemsListHeader.module.css';

const ItemsListHeader = () => {
	return (
		<div className={style.listHeader}>
			<div className={style.name}>Name</div>
			<div className={style.category}>Category</div>
			<div className={style.date}>Date</div>
		</div>
	);
};
export default ItemsListHeader;

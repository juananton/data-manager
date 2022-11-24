import style from './List.module.css';
import ListItem from './ListItem';

const List = ({ data, itemsPerPage }) => {
	const listItemHeight = 56; // Try to get it dinamically

	return (
		<div style={{ height: itemsPerPage * listItemHeight }}>
			{data.length === 0 ? (
				<p className={style.emptyState}>No items to display</p>
			) : (
				data.map(item => <ListItem key={item.id} {...item} />)
			)}
		</div>
	);
};

export default List;

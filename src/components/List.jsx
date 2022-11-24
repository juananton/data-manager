import style from './List.module.css';
import ListItem from './ListItem';

const List = ({ itemsToDisplay, itemsPerPage, error, loading }) => {
	const listItemHeight = 56; // Try to get it dinamically

	const displayItems = () => {
		if (loading) {
			return <p className={style.emptyState}>Loading data.</p>;
		} else if (error) {
			return (
				<p className={`${style.emptyState} ${style.error}`}>
					Error trying to load data.
				</p>
			);
		} else if (itemsToDisplay.length === 0) {
			return <p className={style.emptyState}>No items to display.</p>;
		} else {
			return itemsToDisplay.map(item => <ListItem key={item.id} {...item} />);
		}
	};

	return (
		<div style={{ height: itemsPerPage * listItemHeight }}>
			{displayItems()}
		</div>
	);
};

export default List;

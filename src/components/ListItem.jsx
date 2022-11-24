import { CATEGORIES } from '../lib/constants/categories';
import style from './ListItem.module.css';
import Tag from './Tag';

const ListItem = ({ name, category, date }) => {
	const CATEGORY_STYLES = {
		[CATEGORIES.REACT]: style.react,
		[CATEGORIES.JS]: style.javascript,
		[CATEGORIES.NODE]: style.node
	};

	const categoryClassName = CATEGORY_STYLES[category];

	return (
		<div className={style.listItem}>
			<div className={`${style.name}`}>{name}</div>
			<div className={style.category}>
				<Tag className={categoryClassName}>{category}</Tag>
			</div>
			<div className={style.date}>{date}</div>
		</div>
	);
};

export default ListItem;

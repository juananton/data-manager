import { CATEGORIES } from '../lib/constants/categories';
import style from './ListItem.module.css';
import Tag from './Tag';

const ListItem = ({ name, id, category, date }) => {
	const CATEGORY_STYLES = {
		[CATEGORIES.CAT1]: style.cat1,
		[CATEGORIES.CAT2]: style.cat2,
		[CATEGORIES.CAT3]: style.cat3
	};

	const categoryClassName = CATEGORY_STYLES[category];

	const year = new Date(date).getFullYear();

	return (
		<div className={style.listItem}>
			<div className={style.name}>{name}</div>
			<div className={style.id}>{id}</div>
			<div className={style.category}>
				<Tag className={categoryClassName}>{category}</Tag>
			</div>
			<div className={style.date}>{year}</div>
		</div>
	);
};

export default ListItem;

import ArrowLeftIcon from '../icons/ArowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import Button from './Button';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPages }) => {
	return (
		<div className={style.pageSelector}>
			<p>
				Page {page} of {totalPages || 1}
			</p>
			<Button
				onClick={() => setPage(page - 1)}
				type='icon'
				disabled={page === 1}
			>
				<ArrowLeftIcon />
			</Button>
			<Button
				onClick={() => setPage(page + 1)}
				type='icon'
				disabled={page === totalPages || totalPages === 0}
			>
				<ArrowRightIcon />
			</Button>
		</div>
	);
};

export default PageSelector;

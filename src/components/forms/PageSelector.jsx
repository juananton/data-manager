import ArrowLeftIcon from '../icons/ArowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import Button from './Button';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPages }) => {
	return (
		<div className={style.pageSelector}>
			<Button
				onClick={() => page !== 1 && setPage(page - 1)}
				type='icon'
				use={page === 1 ? 'disabled' : 'secondary'}
			>
				<ArrowLeftIcon />
			</Button>
			<Button
				onClick={() => page !== totalPages && setPage(page + 1)}
				type='icon'
				use={page === totalPages ? 'disabled' : 'secondary'}
			>
				<ArrowRightIcon />
			</Button>
		</div>
	);
};

export default PageSelector;

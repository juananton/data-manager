import { CATEGORIES } from '../../lib/constants/categories';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputAsync from '../atoms/InputAsync';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import style from './CreateItemForm.module.css';

const CreateItemForm = ({ closeForm }) => {
	const {
		itemName,
		itemId,
		itemDate,
		itemDescription,
		setItemName,
		setItemId,
		setItemDate,
		setItemDescription
	} = useCreateForm();

	return (
		<form className={style.createForm}>
			<div className={style.row}>
				<Input
					type='text'
					label='Name'
					error={itemName.error}
					value={itemName.value}
					onChange={e => setItemName(e.target.value)}
				/>
			</div>
			<div className={style.row}>
				<InputAsync
					type='text'
					label='ID'
					success={itemId.value && !itemId.loading && !itemId.error}
					loading={itemId.loading}
					error={itemId.error}
					value={itemId.value}
					onChange={e => setItemId(e.target.value)}
				/>
			</div>
			<div className={style.row}>
				<Select
					className={style.selectCategory}
					label='Category'
					name='category'
				>
					{Object.values(CATEGORIES).map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</Select>
			</div>
			<div className={style.row}>
				<Input
					type='number'
					min='1900'
					max='2050'
					label='Date'
					value={itemDate.value}
					onChange={e => setItemDate(e.target.value)}
				></Input>
			</div>
			<div className={style.row}>
				<TextArea
					label='Description'
					error={itemDescription.error}
					value={itemDescription.value}
					onChange={e => setItemDescription(e.target.value)}
				/>
			</div>
			<div className={style.buttonsWrapper}>
				<Button onClick={closeForm}>Cancel</Button>
				<Button type='submit' use='primary'>
					Save changes
				</Button>
			</div>
		</form>
	);
};

export default CreateItemForm;

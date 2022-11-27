import { useState } from 'react';
import { CATEGORIES } from '../../lib/constants/categories';
import {
	validateItemDescription,
	validateItemName
} from '../../lib/functions/itemValidations';
import Button from '../atoms/Button';
import InputTextAsync from '../atoms/InputTextAsync';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import style from './CreateItemForm.module.css';

const CreateItemForm = ({ closeForm }) => {
	const { itemName, itemDescription, setItemName, setItemDescription } =
		useFormValues();

	return (
		<form className={style.createForm}>
			<div className={style.row}>
				<InputTextAsync
					className={style.inputName}
					label='Name'
					error={itemName.error}
					value={itemName.value}
					onChange={e => setItemName(e.target.value)}
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

const useFormValues = () => {
	const [formValues, setformValues] = useState({
		itemName: { value: '', error: undefined },
		itemDescription: { value: '', error: undefined }
	});

	const setItemName = newItemName => {
		const error = validateItemName(newItemName);
		setformValues({
			...formValues,
			itemName: { value: newItemName, error }
		});
	};

	const setItemDescription = newItemDescription => {
		const error = validateItemDescription(newItemDescription);
		setformValues({
			...formValues,
			itemDescription: { value: newItemDescription, error }
		});
	};

	return { ...formValues, setItemName, setItemDescription };
};

export default CreateItemForm;

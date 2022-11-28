import { useState } from 'react';
import { CATEGORIES } from '../../lib/constants/categories';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputAsync from '../atoms/InputAsync';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import style from './CreateItemForm.module.css';

const CreateItemForm = ({ closeForm }) => {
	const [isSubmiting, setIsSubmitting] = useState(false);

	const {
		itemName,
		itemId,
		itemDescription,
		setItemName,
		setItemId,
		setItemDescription
	} = useCreateForm();

	const isDisabled =
		!itemName.value ||
		itemName.error ||
		itemId.error ||
		itemId.loading ||
		!itemDescription.value ||
		itemDescription.error ||
		isSubmiting;

	return (
		<div className={style.wrapper}>
			<form
				onSubmit={e =>
					handleSubmit(
						e,
						itemId,
						itemName,
						itemDescription,
						setIsSubmitting,
						closeForm
					)
				}
			>
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
					<TextArea
						label='Description'
						error={itemDescription.error}
						value={itemDescription.value}
						onChange={e => setItemDescription(e.target.value)}
					/>
				</div>
				<div className={style.buttonsWrapper}>
					<Button onClick={closeForm}>Cancel</Button>
					<Button type='submit' use='primary' disabled={isDisabled}>
						{isSubmiting ? 'Loading...' : 'Create item'}
					</Button>
				</div>
			</form>
		</div>
	);
};

const handleSubmit = async (
	e,
	itemId,
	itemName,
	itemDescription,
	setIsSubmitting,
	closeForm
) => {
	e.preventDefault();

	setIsSubmitting(true);

	const item = {
		id: itemId.value,
		name: itemName.value,
		category: e.target.category.value,
		date: new Date(),
		description: itemDescription.value
	};

	const res = await fetch('http://localhost:4000/projects', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(item)
	});

	if (res.ok) {
		// TODO: Update items list
		closeForm();
	} else {
		setIsSubmitting(false);
	}
};

export default CreateItemForm;

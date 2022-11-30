import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createItem } from '../../lib/api/dataApi';
import { CATEGORIES } from '../../lib/constants/categories';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputAsync from '../atoms/InputAsync';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import style from './CreateItemForm.module.css';

const CreateItemForm = () => {
	const [isSubmiting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();

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
		<>
			<div className={style.pageHeader}>
				<div className={style.wrapper}>
					<h1 className={style.title}>Create Item</h1>
				</div>
			</div>
			<div className={style.wrapper}>
				<form
					onSubmit={e =>
						handleSubmit(
							e,
							itemId,
							itemName,
							itemDescription,
							setIsSubmitting,
							navigate
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
						<Link to='/'>{<Button>Cancel</Button>}</Link>
						<Button type='submit' use='primary' disabled={isDisabled}>
							{isSubmiting ? 'Loading...' : 'Save'}
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

const handleSubmit = async (
	e,
	itemId,
	itemName,
	itemDescription,
	setIsSubmitting,
	navigate
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

	const success = await createItem(item);

	if (success) {
		// TODO: Update items list
		navigate('/');
	} else {
		setIsSubmitting(false);
	}
};

export default CreateItemForm;

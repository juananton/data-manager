import { useEffect, useState } from 'react';
import { findItemByItemId } from '../api/dataApi';
import {
	validateItemDescription,
	validateItemId,
	validateItemName
} from '../functions/itemValidations';

export const useCreateForm = () => {
	const ID = Math.floor(Math.random() * 10000); // Temporary solution for async testing
	const [formValues, setformValues] = useState({
		itemName: { value: '', error: undefined },
		itemId: { value: ID, success: true, loading: false, error: undefined },
		itemDescription: { value: '', error: undefined }
	});

	const setItemName = newItemName => {
		const error = validateItemName(newItemName);
		setformValues({
			...formValues,
			itemName: { value: newItemName, error }
		});
	};

	const setItemId = newItemId => {
		const error = validateItemId(newItemId);
		setformValues({
			...formValues,
			itemId: { value: newItemId, loading: !error, error }
		});
	};

	const setItemDescription = newItemDescription => {
		const error = validateItemDescription(newItemDescription);
		setformValues({
			...formValues,
			itemDescription: { value: newItemDescription, error }
		});
	};

	const setItemIdError = error =>
		setformValues(prevFormValues => ({
			...prevFormValues,
			itemId: {
				value: prevFormValues.itemId.value,
				error,
				loading: false
			}
		}));

	useEffect(() => {
		if (!formValues.itemId.loading) return;

		const controller = new AbortController();
		const timeoutId = setTimeout(
			() =>
				validateItemIdAvailable(
					formValues.itemId.value,
					setItemIdError,
					controller.signal
				),
			500
		);
		return () => {
			controller.abort();
			clearTimeout(timeoutId);
		};
	}, [formValues.itemId.loading, formValues.itemId.value]);

	return {
		...formValues,
		setItemName,
		setItemId,
		setItemDescription
	};
};

const validateItemIdAvailable = async (itemId, setItemIdError, signal) => {
	const { item, error, abort } = await findItemByItemId(itemId, signal);

	if (abort) return;
	if (error) return setItemIdError('Validation error');

	setItemIdError(item ? 'ID already in use' : undefined);
};

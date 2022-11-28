import { useEffect, useState } from 'react';
import {
	validateItemDescription,
	validateItemId,
	validateItemName
} from '../functions/itemValidations';

const validateItemIdAsync = async (itemId, setItemIdError, signal) => {
	let error;
	try {
		const res = await fetch(`http://localhost:4000/projects?id=${itemId}`, {
			signal
		});
		if (res.ok) {
			const data = await res.json();
			if (data.length) error = 'ID already in use';
		} else {
			error = 'Validation error';
		}
	} catch (err) {
		error = 'Validation error';
	}

	setItemIdError(error);
};

export const useCreateForm = () => {
	const year = new Date().getFullYear();
	const ID = Math.floor(Math.random() * 10000); // Temporary solution for async testing

	const [formValues, setformValues] = useState({
		itemName: { value: '', error: undefined },
		itemId: { value: ID, success: true, loading: false, error: undefined },
		itemDate: { value: year },
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

	const setItemDate = newItemDate => {
		setformValues({
			...formValues,
			itemDate: { value: newItemDate }
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
		if (formValues.itemId.loading) {
			const controller = new AbortController();
			validateItemIdAsync(
				formValues.itemId.value,
				setItemIdError,
				controller.signal
			);
			return () => controller.abort;
		}
	}, [formValues.itemId.loading, formValues.itemId.value]);

	return {
		...formValues,
		setItemName,
		setItemId,
		setItemDate,
		setItemDescription
	};
};
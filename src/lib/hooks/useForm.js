import { useState } from 'react';
import { DATA_FORMS } from '../constants/forms';

export const useForms = () => {
	const [currentForm, setCurrentForm] = useState(DATA_FORMS.FILTER);

	const setFilterForm = () => setCurrentForm(DATA_FORMS.FILTER);
	const setCreateForm = () => setCurrentForm(DATA_FORMS.CREATE);
	const setEditForm = () => setCurrentForm(DATA_FORMS.EDIT);
	const setDeleteForm = () => setCurrentForm(DATA_FORMS.DELETE);

	return {
		currentForm,
		setFilterForm,
		setCreateForm,
		setEditForm,
		setDeleteForm
	};
};

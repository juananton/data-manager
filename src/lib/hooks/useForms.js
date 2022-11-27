import { useState } from 'react';
import { FORMS } from '../constants/forms';

export const useForms = () => {
	const [currentForm, setCurrentForm] = useState(FORMS.FILTER);

	const setFiltersForm = () => setCurrentForm(FORMS.FILTER);
	const setCreateForm = () => setCurrentForm(FORMS.CREATE);
	const setEditForm = () => setCurrentForm(FORMS.EDIT);
	const setDeleteForm = () => setCurrentForm(FORMS.DELETE);

	return {
		currentForm,
		setFiltersForm,
		setCreateForm,
		setEditForm,
		setDeleteForm
	};
};

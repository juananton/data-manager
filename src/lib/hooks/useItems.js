import { useEffect, useState } from 'react';
import { getData } from '../api/dataApi';

// GET ALL DATA FROM THE API
const loadData = async (setAllItems, setError, signal) => {
	const { data, aborted } = await getData(signal);
	if (aborted) return;
	if (data) setAllItems(data);
	else setError();
};

//  DISPLAY ITEMS
export const useItems = () => {
	const [items, setItems] = useState({
		allItems: [],
		error: false,
		loading: true
	});

	const setAllItems = newAllItems =>
		setItems({
			allItems: newAllItems,
			loading: false,
			error: false
		});

	const setError = () =>
		setItems({
			allItems: [],
			loading: false,
			error: true
		});

	useEffect(() => {
		const controller = new AbortController();
		loadData(setAllItems, setError, controller.signal);
		return () => controller.abort();
	}, []);

	return {
		items: items.allItems,
		error: items.error,
		loading: items.loading
	};
};

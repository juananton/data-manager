export const createItem = async item => {
	try {
		const res = await fetch('http://localhost:4000/data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const getData = async signal => {
	try {
		const res = await fetch('http://localhost:4000/data', { signal });
		let data;

		if (res.ok) data = await res.json();

		return {
			data,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const iasAborted = err.name === 'AbortError';
		return {
			data: undefined,
			error: !iasAborted,
			aborted: iasAborted
		};
	}
};

export const findItemByItemId = async (itemId, signal) => {
	try {
		const res = await fetch(`http://localhost:4000/data?id=${itemId}`, {
			signal
		});

		let item;

		if (res.ok) {
			const items = await res.json();
			item = items[0];
		}

		return {
			item,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const iasAborted = err.name === 'AbortError';

		return {
			item: undefined,
			error: !iasAborted,
			aborted: iasAborted
		};
	}
};

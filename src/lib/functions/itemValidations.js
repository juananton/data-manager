const REGEX = {
	ITEM_NAME: /^[a-záéíóú\s-]+$/i
};

export const validateItemName = itemName => {
	if (!REGEX.ITEM_NAME.test(itemName))
		return 'Only letters, spaces, and hyphens are allowed.';

	if (itemName.includes('  ')) return 'Double spaces are not allowed.';

	if (itemName.includes('--')) return 'Double hyphens are not allowed.';

	const nameSplitted = itemName.split(' ');
	for (const word of nameSplitted) {
		if (word.startsWith('-') || word.endsWith('-'))
			return 'Incorrect use of hyphens.';
	}

	if (itemName.length < 3 || itemName.length > 23) {
		return 'Name must have between 3 and 23 characters.';
	}
};

export const validateItemDescription = itemDescription => {
	if (itemDescription.length < 3) {
		return 'Description must have at least 6 characters.';
	}
};

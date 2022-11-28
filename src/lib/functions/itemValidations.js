const REGEX = {
	ITEM_NAME: /^[a-záéíóú\s-]+$/i,
	ITEM_ID: /^[1-9999]{1,4}$/
};

export const validateItemName = name => {
	if (!REGEX.ITEM_NAME.test(name))
		return 'Only letters, spaces, and hyphens are allowed.';

	if (name.includes('  ')) return 'Double spaces are not allowed.';

	if (name.includes('--')) return 'Double hyphens are not allowed.';

	const nameSplitted = name.split(' ');
	for (const word of nameSplitted) {
		if (word.startsWith('-') || word.endsWith('-'))
			return 'Incorrect use of hyphens.';
	}

	if (name.length < 3 || name.length > 23) {
		return 'Name must have between 3 and 23 characters.';
	}
};

export const validateItemId = id => {
	if (!REGEX.ITEM_ID.test(id)) {
		return 'The ID must be a number between 1 and 9999.';
	}
};

export const validateItemDescription = description => {
	if (description.length < 3) {
		return 'Description must have at least 6 characters.';
	}
};

const setSelectedColor = colorClass => {
	/*
	 * Set the selected color the the background
	 */
	const body = document.getElementsByClassName('body-color')[0];
	body.className = 'body-color ' + colorClass;
};

/**
 * Set the class `select` to the parent of the current selected color value.
 *
 * @method setSelectedElement
 *
 * @param {string} colorReference The new selected color
 */
const setSelectedElement = colorReference => {
	const oldSelectedColor = document.getElementsByClassName('selected')[0];
	if (oldSelectedColor) {
		oldSelectedColor.className = 'color-select-wrapper';
	}
	const newSelectedColor = document.getElementsByClassName('color-select ' + colorReference)[0];
	newSelectedColor.parentNode.className = 'color-select-wrapper selected';
};

const setSelectedColor = colorClass => {
	/*
	 * Set the selected color the the background
	 */
	const body = document.getElementsByClassName('body-color')[0];
	body.className = 'body-color ' + colorClass;
};

/*
 * Set the class `select` to the parent of the current selected color value.
 * Warning: This function is not that optimized and it's quite intensive since it traverses the
 * DOM nodes several times.
 */
const setSelectedElement = colorReference => {
	const colorWrappers = document.getElementsByClassName('color-select-wrapper');
	for (wrapper of colorWrappers) {
		wrapper.className = 'color-select-wrapper';
		for (childNode of wrapper.childNodes) {
			if (childNode.className && childNode.className.includes('color-select ' + colorReference)) {
				childNode.parentNode.className = 'color-select-wrapper selected';
			}
		}
	}
};

/*
 * When the window loads, set the colors the current selected color
 */

window.onload = event => {
	/*
	 * Get the data from Chrome storage and set the color
	 */
	getChromeData('color', ({ color = 'gtk-dark' }) => {
		
		setSelectedColor(color);
		setSelectedElement(color);
	});
	/*
	 * Set an onclick handler to the select color elements so we can change the color.
	 * Notice: we are using event bubbling to capture the click events on the page.
	 */
	document.onclick = function({ target }) {
 		if (target.className.includes('color-select')) {
 			saveChromeData({ color: target.dataset.color });
 			getChromeData('color', ({ color }) => {
				setSelectedColor(color);
				setSelectedElement(color);
			});
 		}
 	}
};

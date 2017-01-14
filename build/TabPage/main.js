/*
 * When the window loads, set the colors the current selected color
 */
window.onload = () => {
	
	/*
	 * Create the <style> tag if it does not exist
	 */
	appendStylesTag();
	
	/*
	 * Grap the <style> tag and the colors container element
	 */
	const rootTag = document.getElementById('colors-root');
	const styleTag = document.getElementsByTagName('style')[0];
	
	/*
	 * Map through the colors array:
	 * - generate style classes and append them to the <style> tag.
	 * - generate color selector elements
	 */
	const colorElements = colors.map((color) => {
		appendStyleClasses(color, styleTag);
		return renderColorSelector(color);
	});
	
	/*
	 * Append the color selector elements to the colors container element
	 */
	colorElements.map(element => rootTag.appendChild(element));

	/*
	 * Get the data from Chrome storage and set the color
	 */
	getChromeData('color', ({ color = colors[0].name }) => {
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

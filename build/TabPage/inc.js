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
 * @param {string} colorReference - The new selected color
 */
const setSelectedElement = colorReference => {
	const oldSelectedColor = document.getElementsByClassName('selected')[0];
	if (oldSelectedColor) {
		oldSelectedColor.className = 'color-select-wrapper';
	}
	const newSelectedColor = document.getElementsByClassName('color-select ' + colorReference)[0];
	newSelectedColor.parentNode.className = 'color-select-wrapper selected';
};

/**
 * Create the color selector DOM node
 *
 * @method renderColor
 *
 * @param {object} color - A color object (in our case we destructure it)
 *
 * @return {node} - The color selector DOM node
 */
const renderColorSelector = ({ name, value }) => {
	const colorWrapper = document.createElement('div');
	const colorSelectElement = document.createElement('div');
	colorWrapper.className = 'color-select-wrapper';
	colorSelectElement.className = `color-select ${name}`;
	colorSelectElement.dataset.color = name;
	colorWrapper.appendChild(colorSelectElement);
	return colorWrapper;
};

/**
 * Generate CSS classes
 *
 * @method generateStyles
 *
 * @param {object} color - A color object (in our case we destructure it)
 *
 * @return {string} - A CSS class string (with styles in it)
 */
const generateStyles = ({ name, value }) => {
	const styles = document.createElement('style');
	styles.type = 'text/css';
	styles.innerHTML = `.${name} { background-color: #${value}; }`;
	return styles;
}

/**
 * Append a <style> tag to the <head> of the HTML document
 *
 * @method appendStylesTag
 *
 * @return {null} - We don't return anything, we just modify the DOM
 */
const appendStylesTag = () => {
	if (!document.getElementsByTagName('style')[0]) {
		const style = document.createElement('style');
		const head = document.getElementsByTagName('head')[0];
		style.type = 'text/css';
		head.appendChild(style);
	}
};

/**
 * Append CSS classes (in the form of strings) to a <style> tag
 *
 * @method appendStyleClasses
 *
 * @param {object} color - A color object (in our case we destructure it)
 * @param {node} styleTag - The style tag to append our CSS classes (strings) to (defaults to the 
 * first <style> tag we find in the document)
 *
 * @return {null} - We don't return anything, we just modify the DOM
 */
const appendStyleClasses = (
	{ name, value }, 
	styleTag = document.getElementsByTagName('style')[0]
) => styleTag.innerHTML += `.${name} { background-color: #${value}; } \n`;

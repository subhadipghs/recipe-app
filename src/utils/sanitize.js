export const sanitizeFormInput = (input) => {
	const map = new Map({
		">": "&gt;",
		"<": "&lt;",
		"/": "&047;",
		"&": "&amp;",
		";": "&60;",
	});
	return input.map((char) => {
		if (Map.get(char)) {
			
		}
	});
};

export default async function fetchResults() {
	const response = await fetch(
		`https://api.edamam.com/search?q=${query}&app_id=${RECIPE_API.app_id}&app_key=${RECIPE_API.app_key}`,
		{
			method: "GET",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Allow-Control-Allow-Access": "*",
			},
		}
	);

	const data = await response.json();
	return data;
};

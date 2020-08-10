import axios from 'axios';
import { RECIPE_API } from '../../config/RecipeAPI';
import {
	FETCH_RECIPE,
	FETCH_RECIPE_SUCCESS,
	FETCH_RECIPE_ERROR,
} from "../types/recipe";

export const fetchRecipe = () => {
	return {
		type: FETCH_RECIPE,
	};
};

export const fetchRecipeSuccess = (data) => {
	return {
		type: FETCH_RECIPE_SUCCESS,
		payload: data,
	};
};

export const fetchRecipeError = (error) => {
	return {
		type: FETCH_RECIPE_ERROR,
		payload: error,
	};
};


export const fetchRecipeApi = (query) => {
	return (dispatch) => {
		return axios.get(`https://api.edamam.com/search?q=${query}&from=0&to=44&app_id=${RECIPE_API.app_id}&app_key=${RECIPE_API.app_key}`)
			.then(response => {
				dispatch(fetchRecipe());
				const searchedResults = response.data;
				console.log('user', searchedResults);
				dispatch(fetchRecipeSuccess(searchedResults));
			})
			.catch(error => {
				dispatch(fetchRecipeError(error.message));
			})
	}
}

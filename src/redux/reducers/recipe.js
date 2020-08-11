import {
	FETCH_RECIPE,
	FETCH_RECIPE_SUCCESS,
	FETCH_RECIPE_ERROR,
} from "../types/recipe";

const initialRecipeState = {
	loading: false,
	data: [],
	error: "",
};

export const recipeReducer = (state = initialRecipeState, action) => {
	switch (action.type) {
		case FETCH_RECIPE:
			return {
				...state,
				loading: true
			};
		case FETCH_RECIPE_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: '',
			};
		case FETCH_RECIPE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

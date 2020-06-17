import { createAction } from 'redux-actions';

export default {
    'RECIPES/FETCH_RECIPES_ADD_SUCCESSFULLY': createAction("RECIPES/FETCH_RECIPES_ADD_SUCCESSFULLY"),
    'RECIPES/FETCH_SET_RECIPES': createAction('RECIPES/FETCH_SET_RECIPES'),
    "RECIPES/FETCH_LOAD_DATA": createAction("RECIPES/FETCH_LOAD_DATA"),
    'RECIPES/FETCH_RECIPE_REMOVE': createAction('RECIPES/FETCH_RECIPE_REMOVE'),
    'RECIPES/FETCH_RECIPES_REMOVE_ALL': createAction('RECIPES/FETCH_RECIPES_REMOVE_ALL'),
    'RECIPES/FETCH_RECIPE_EDIT': createAction('RECIPES/FETCH_RECIPE_EDIT')
}
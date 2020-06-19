import { call, put, select, takeEvery, } from "redux-saga/effects";

import Actions from './../actions/recipe';

export const getRecepties = (state) => {
    return state.recipe.recipeList;
};

function* loadFromLocal() {
    let new_data = JSON.parse(localStorage.getItem("recipes"));
    if (new_data == null) {
        new_data = [];
    }

    yield put({
        type: "RECIPES/SET_RECIPES",
        payload: new_data,
    });
}

function* saveToLocal() {
    let data = yield select(getRecepties);

    yield call(function () {
        localStorage.setItem("recipes", JSON.stringify(data));
    });
}

export function* sagaWatcher() {
    yield takeEvery(Actions["RECIPES/LOAD_DATA"], loadFromLocal);
    yield takeEvery(Actions["RECIPES/RECIPES_ADDED_SUCCESSFULLY"], saveToLocal);
    yield takeEvery(Actions["RECIPES/RECIPES_REMOVE_ALL"], saveToLocal);
    yield takeEvery(Actions["RECIPES/RECIPE_EDIT"], saveToLocal);
    yield takeEvery(Actions["RECIPES/RECIPE_REMOVE"], saveToLocal);
}
import { connect } from 'react-redux';
import Actions from '../../actions/recipe';
import React from 'react';
import { withRouter } from "react-router";
import Recipe from '../Recipe'

function SingleRecipe(props) {
    const { myRecipes,  match, recipeRemove, history } = props
    const removeRecipe = (id) => {
        recipeRemove(id);
        history.push('/')
    }
    const submitEdit = (id) => {
        history.push(`/editRecipe/${id}`)
    }
    const id = +match.params.recipeId;
    const recipe = myRecipes.find((elem) => elem.id === id);

    return (
        <Recipe edit={submitEdit.bind(this, id)} remove={removeRecipe.bind(this, id)} title={recipe.title} description={recipe.description} />
    )
}

const mapStateToProps = state => {
    return {
        myRecipes: state.recipe.recipeList
    };
};
const mapDispatchToProps = dispatch => {
    return {
        recipeRemove: (id) => dispatch(Actions['RECIPES/RECIPE_REMOVE'](id)),
        editRecipe: (params) => dispatch(Actions['RECIPES/RECIPE_EDIT'](params))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SingleRecipe));
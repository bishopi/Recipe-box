import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AddPage from '../AddPage';
import Actions from '../../actions/recipe';

const mapStateToProps = state => {

    return {
        myRecipes: state.recipe.recipeList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveRecipe: (params) => dispatch(Actions["RECIPES/RECIPES_ADDED_SUCCESSFULLY"](params)),
        editRecipe: (params) => dispatch(Actions['RECIPES/RECIPE_EDIT'](params))

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(AddPage));
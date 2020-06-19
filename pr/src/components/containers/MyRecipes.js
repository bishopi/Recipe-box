import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MyRecipes from '../MyRecipes';
import Actions from '../../actions/recipe';

const mapStateToProps = state => {

    return {
        myRecipes: state.recipe.recipeList
    };
};
const mapDispatchToProps = dispatch => {
    return {
        recipeRemove: (id) => dispatch(Actions['RECIPES/RECIPE_REMOVE'](id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MyRecipes));
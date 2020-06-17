import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

function RecipeList({ myRecipes }) {
    return (
        <div >
            <div className='recipeList'> Recipe List: </div>
            {myRecipes.map((recipe, index) => {
                return (
                    <NavLink key={index} activeClassName='active' to={`/showAllRecipes/${recipe.id}`}><button  className="menuButton">{recipe.title}</button></NavLink>
                )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        myRecipes: state.recipe.recipeList
    };
};
export default connect(
    mapStateToProps,
    null
)(RecipeList);
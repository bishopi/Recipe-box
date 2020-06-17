import React from 'react';

import Recipe from './Recipe';

function MyRecipes(props) {
    const { myRecipes, recipeRemove, history } = props;
    const removeRecipe = (id) => {
        recipeRemove(id)
    }
    if (myRecipes.length === 0) {
        return (<div className='headerMain'> No saved recipes </div>)


    }
    const editRecipe = (id) => {
        history.push(`/editRecipe/${id}`)
    }

    return (
        <div className="recipes">
            {props.myRecipes.map((recipe, id) => {
                return (
                    <Recipe key={id} edit={editRecipe.bind(this, recipe.id)} remove={removeRecipe.bind(this, recipe.id)} title={recipe.title} description={recipe.description}></Recipe>
                )
            })}
        </div>
    )
}

export default MyRecipes;


export const DetailsView = ({ recipes, selectedRecipeId, setView }) => {

    // Selected recipe
    const recipe = recipes[selectedRecipeId]; // returns undefined if OOI

    const NoRecipeComponent = () => {
        return(
            <div>
                <h2>No Recipe Selected</h2>
                <p>The recipe may have been removed or deleted and is not longer available.</p>
            </div>
        )
    }


    const DetailsComponent = () => {
        return (
            <div>
                <div className="details-card">
                    <h2 className="recipe-header">{recipe.name}</h2>

                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Prep:</strong> {recipe.prepTime} mins | <strong>Cook:</strong> {recipe.cookTime} min</p>
                    <div className="ingredients-box-details">
                        <p><strong>Ingredients:</strong></p>
                        {/* I tried using HTML tables to list ingredients, but it looked ugly :( */}
                        <ul>
                            {recipe.ingredients.map(ing => (
                                <li className="ingredient-item" key={ing.item}>{ing.quantity} {ing.measurement} of {ing.item}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="instructions-box-details">
                        <p><strong>Instructions:</strong></p>
                        <p>{recipe.instructions}</p>
                    </div>

                    <p className="tag-text">
                        Tags: {recipe.tags}
                    </p>
                </div>
                <button onClick={handleBtn}>Back to Recipe List</button>
            </div>
        )
    }



    // Route/view handler
    const handleBtn = () => {
        setView("Home")
    }
    // Jsx component
    return (
        <>
        {/* renders details component iif recipe is not null*/}
            { recipe ? <DetailsComponent /> : 
            <NoRecipeComponent />
            }
        </>
    )
}
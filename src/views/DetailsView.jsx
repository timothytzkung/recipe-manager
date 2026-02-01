

export const DetailsView = ({ recipe, setView }) => {

    const handleBtn = () => {
        setView("Home")
    }
    return ( 
        <>
            <div>
                <div class="details-card">
                    <h2 className="recipe-header">{recipe.name}</h2>

                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Prep:</strong> {recipe.prepTime} mins | <strong>Cook:</strong> {recipe.cookTime} min</p>
                    <div className="ingredients-box-details">
                    <p><strong>Ingredients:</strong></p>
                        <ul>
                            {recipe.ingredients.map(ing => (
                                <li className="ingredient-item" key={ing.item}>{ing.quantity} {ing.measurement} of {ing.item}</li>
                            ))}
                        </ul>
                    </div>


                        <div class="instructions-box-details">
                            <p><strong>Instructions:</strong></p>
                            <p>{recipe.instructions}</p>
                        </div>

                        <p className="tag-text">
                            Tags: {recipe.tags}
                        </p>
                </div>
                <button onClick={handleBtn}>Back to Recipe List</button>
            </div>
        </>
    )
}
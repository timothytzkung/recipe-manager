

export const Card = ({ recipe, setView, setSelectedRecipeId }) => {

    // Destructure for props
    const {id, name, servings, prepTime, cookTime, ...rest} = recipe;

    // Handles id selection and rerouting
    const handleSeeRecipe = () => {
        setSelectedRecipeId(recipe.id);
        setView("Details")
    }

    // jsx component
    return (
        <>
            <div className="card">
                <h2>{name}</h2>
                <p>Prep Time: {prepTime} min</p>
                <p>CookTime: {cookTime} min</p>
                <p>Serves: {servings}</p>
                <button onClick={handleSeeRecipe}>See Recipe</button>
            </div>
        </>
    )
}
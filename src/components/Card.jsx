

export const Card = ({ recipe, setView, setSelectedRecipeId }) => {

    const {id, name, servings, prepTime, cookTime, ...rest} = recipe;

    const handleSeeRecipe = () => {
        setSelectedRecipeId(recipe.id);
        setView("Details")
    }

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
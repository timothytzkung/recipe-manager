
import { RecipeList } from "../components/RecipeList"

export const HomeView = ( { recipes, setView, setSelectedRecipeId } ) => {

    // JSX component
    return (
        <>
        <div>
            <h2>Your Recipes: </h2>
            { 
            recipes.length > 0 ? <RecipeList recipes={recipes} setView={setView} setSelectedRecipeId={setSelectedRecipeId}/> :
            <p>No Recipes Available</p>
            }
        </div>
        </>
    )
}

import { RecipeList } from "../components/RecipeList"

export const HomeView = ( { recipes } ) => {

    console.log("Heres the recipe: ", recipes)

    return (
        <>
        <div>
            <h2>Home </h2>
            { 
            recipes.length > 0 ? <RecipeList recipes={recipes}/> :
            <p>No Recipes</p>
            }
        </div>
        </>
    )
}
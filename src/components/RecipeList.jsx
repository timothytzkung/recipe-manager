import { Card } from './Card';

export const RecipeList = ({recipes, setView, setSelectedRecipeId }) => {

    return (
        <div>
            {recipes.map(recipe => 
            <Card key={recipe.id} recipe={recipe} setView={setView} setSelectedRecipeId={setSelectedRecipeId}/>)}
        </div>
    )
}
import { Card } from './Card';

export const RecipeList = ({recipes}) => {

    return (
        <div>
            {recipes.map(recipe => 
            <Card key={recipe.id} recipe={recipe}/>)}
        </div>
    )
}


export const Card = ({recipe}) => {

    const {id, name, servings, prepTime, cookTime, ...rest} = recipe;

    return (
        <>
            <div className="card">
                <h2>{name}</h2>
                <p>Prep Time: {prepTime} min</p>
                <p>CookTime: {cookTime} min</p>
                <p>Serves: {servings}</p>
            </div>
        </>
    )
}
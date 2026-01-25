

export const Navbar = ( { viewChanger, views }  ) => {
    
    return (
        <>
        <div className="navbar">
            <h1>Recipe Manager</h1>
            <button onClick={() => viewChanger(views.Home)}>All Recipes</button>
            <button onClick={() => viewChanger(views.Details)}>Details</button>
            <button onClick={() => viewChanger(views.AddRecipe)}>Add Recipe</button>
        </div>
        </>
    )
}
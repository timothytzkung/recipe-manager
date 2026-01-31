

export const Navbar = ( { setView } ) => {
    
    return (
        <>
        <div className="navbar">
            <h1>Recipe Manager</h1>
            <button onClick={() => setView("Home")}>All Recipes</button>
            <button onClick={() => setView("AddRecipe")}>Add Recipe</button>
        </div>
        </>
    )
}
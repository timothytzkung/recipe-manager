import { useState, useEffect } from 'react'
import './App.css'
import { HomeView, DetailsView, AddRecipeView } from './views'
import { Navbar } from "./components/Navbar"


function App() {
  // States
  const [currentView, setCurrentView] = useState("Home");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);
  const [id, setId] = useState(0) // Index counting for recipes

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    console.log("Recipe Submitted!")
  }

  return (
    <>
    <div>
      <Navbar setView={setCurrentView} />
      
      {currentView === "Home" && (
        <HomeView recipes={recipes}/>
      )}
      {currentView === "AddRecipe" && (
        <AddRecipeView onRecipeAdd={addRecipe} setView={setCurrentView} id={id} setId={setId}/>
      )}

    </div>
      
    </>
  )
}

export default App

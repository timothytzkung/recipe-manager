import { useState } from 'react'
import './App.css'
import { HomeView, DetailsView, AddRecipeView } from './views'
import { Navbar } from "./components/Navbar"

function App() {
  // States
  const [currentView, setCurrentView] = useState("Home");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  }

  // Example recipe obj; time in mins
  const sampleRecipe = {
    name: "Ham Sandwich",
    prepTime: 20,
    cookTime: 10,
    serves: 2,
    ingredients: [
      "bread", "ham", "cheese"
    ],
    instructions: "",
    tags: []
  }


  return (
    <>
    <div>
      <Navbar setView={setCurrentView} />
      
      {currentView === "Home" && (
        <HomeView />
      )}
      {currentView === "AddRecipe" && (
        <AddRecipeView />
      )}

    </div>
      
    </>
  )
}

export default App

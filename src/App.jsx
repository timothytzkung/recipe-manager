import { useState } from 'react'
import './App.css'
import { HomeView, DetailsView, AddRecipeView } from './views'
import { Navbar } from "./components/Navbar"

function App() {
  // States
  const [currentView, setCurrentView] = useState(HomeView);
  const [recipes, setRecipes] = useState(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);

  // View Object for components
  const views = {
    Home: HomeView, 
    Details: DetailsView, 
    AddRecipe: AddRecipeView
  }


  return (
    <>
    <div>
      <Navbar viewChanger={setCurrentView} views={views}/>
      {currentView}
    </div>
      
    </>
  )
}

export default App

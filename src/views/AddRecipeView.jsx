import React, { useState, Fragment } from 'react';
import '../App.css';

export const AddRecipeView = ({ onRecipeAdd, setView, id, setId }) => {
    // Initial state for 10 empty ingredient rows
    const [ingredients, setIngredients] = useState(
        Array(10).fill({ quantity: '', measurement: 'cups', item: '' })
    );
    const [error, setError] = useState('');

    const handleIngredientChange = (index, field, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = { ...newIngredients[index], [field]: value };
        setIngredients(newIngredients);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error state

        const formData = new FormData(e.target);
        
        // Check if all entered quantities are numbers
        for (let i = 0; i < ingredients.length; i++) {
            const qty = ingredients[i].quantity;
            if (qty && isNaN(Number(qty))) {
                setError(`Error: Ingredient Quantity must be a number (Item ${i + 1})`);
                return; // Stop submission
            }
        }

        // Construct final object if validation passes
        const recipeData = {
            id: id,
            name: formData.get('name'),
            servings: formData.get('servings'),
            prepTime: formData.get('prep-time'),
            cookTime: formData.get('cook-time'),
            ingredients: ingredients.filter(ing => ing.item !== ''), // Clean empty rows
            instructions: formData.get('instructions'),
            tags: formData.get('tags')
        };
        setId(id+1);
        onRecipeAdd(recipeData); // Pass up to main App
        setView("Home") // Return home
    };

    return (
        <div className="recipe-container">
            <h2>Add Recipes</h2>
            
            {/* Error Message Display */}
            {error && <div className='error-msg'>{error}</div>}

            <div className="recipe-card">
                <form className="recipe-form" onSubmit={handleSubmit}>
                    <div className="column">
                        {/* Serves: Radio Buttons */}
                        <div className="input-group">
                            <label>Servings: </label>
                            {[1, 2, 3].map(num => (
                                <Fragment key={num}>
                                    <input type="radio" id={num} value={num} name="servings" defaultChecked={num === 1} />
                                    <label htmlFor={num}>{num}</label>
                                </Fragment>
                            ))}
                        </div>

                        <div className="input-group">
                            <label>Recipe Name: <input type="text" name="name" required /></label>
                        </div>
                        <div className="input-group">
                            <label>Prep Time (min): <input type="number" name="prep-time" /></label>
                        </div>
                        <div className="input-group">
                            <label>Cook Time (min): <input type="number" name="cook-time" /></label>
                        </div>
                        
                        <div className="input-group">
                            <label>Instructions:</label>
                            <textarea name="instructions" rows="4" className="instructions-box" />
                        </div>
                        
                        <div className="input-group">
                            <label>Tags: <input type="text" name="tags" placeholder="e.g. vegan, spicy" /></label>
                        </div>
                    </div>

                    <div className="column">
                        {/* Ingredients Table: Fixed 10 Rows */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Quantity</th>
                                    <th>Measurement</th>
                                    <th>Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingredients.map((ing, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={ing.quantity} 
                                                onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                                                placeholder="Qty"
                                            />
                                        </td>
                                        <td>
                                            <select 
                                                value={ing.measurement} 
                                                onChange={(e) => handleIngredientChange(index, 'measurement', e.target.value)}
                                            >
                                                <option value="cups">cups</option>
                                                <option value="tsp">tsp</option>
                                                <option value="tbsp">tbsp</option>
                                                <option value="grams">grams</option>
                                                <option value="pcs">pcs</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={ing.item} 
                                                onChange={(e) => handleIngredientChange(index, 'item', e.target.value)}
                                                placeholder="Ingredient name"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <input type="submit" value="Submit Recipe" className='submit-btn' />
                </form>
            </div>
        </div>
    );
};
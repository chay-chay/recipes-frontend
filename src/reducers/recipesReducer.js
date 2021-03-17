
const recipesReducer = (state = {recipes: [], loading: false}, action) => {
    
    switch (action.type) {
        case "LOADING":
        return {...state, loading: true};

        case "LOAD_RECIPES":
            console.log(action)
            // console.log("E")
        return {...state, loading: false, recipes: action.payload};

        case "ADDED_RECIPE":
            return { ...state, recipes: [...state.recipes, action.payload] }    
            
        case "DELETE_RECIPE":
            const filteredRecipe = state.recipes.filter(recipe => recipe.id !== action.payload.id)
            return { ...state, recipe: filteredRecipe }
    
        // case "UPDATE_MEAL":             
                
                
        default:
            return state;
    }
}

export default recipesReducer
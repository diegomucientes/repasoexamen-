  
const RecipeController = require('../controllers/recipe.controller');

module.exports = function(app){
    app.post('/api/recipe/add',RecipeController.createRecipe)
    app.get('/api/recipes/',RecipeController.getAll)
    app.get('/api/recipe/:id', RecipeController.getRecipe);
    app.put('/api/recipe/:id', RecipeController.updateRecipe);
    app.delete('/api/recipe/:id', RecipeController.deleteRecipe); 

}








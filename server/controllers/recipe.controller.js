const {Recipe}=require('../models/recipe.model');

module.exports.createRecipe=(request,response)=>{
    const {title,ingredientes,instrucciones}=request.body;
    Recipe.create({
        title,
        ingredientes,
        instrucciones
    })
    .then(recipe=>response.json(recipe))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAll=(request,response)=>{
    Recipe.find({}).sort({title: 1}).exec()
    .then(recipes=>response.json(recipes))
    .catch(err=>response.json(err))
}

module.exports.getRecipe = (request, response) => {
    Recipe.findOne({_id:request.params.id})
        .then(recipe => response.json(recipe))
        .catch(err => response.status(400).json(err))
}

module.exports.updateRecipe = (request, response) => {
    Recipe.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true,new:true})
        .then(updatedRecipe => response.json(updatedRecipe))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteRecipe= (request, response) => {
    Recipe.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
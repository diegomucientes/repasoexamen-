const mongoose=require('mongoose');

const RecipeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Titulo es obligatorio'],
        minlength:[3,'El titulo debe ser de al menos 3 caracteres']
    },
    ingredientes:{
        type:String,
        required:[true,'Hay que ingresar ingredientes']
    },
    instrucciones:{
        type:String,
        required:[true,'Hay que ingresar instrucciones']
    }
  
},{timestamps:true});

module.exports.Recipe = mongoose.model('Recipe',RecipeSchema);
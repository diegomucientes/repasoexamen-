import React,{useState,useEffect} from 'react';
import axios from 'axios';
import{Link}from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:9000/api/recipes')
            .then(res=>{
                setRecipes(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom=(recipeId)=>{
        setRecipes(recipes.filter(recipe=>recipe._id !== recipeId))
    }
     
    return (
        <div>
             {recipes.map((recipe, idx)=>{
                return (
                    <div key={idx} >
                        <li><Link to ={`/recipe/`+recipe._id}>{recipe.title}, {recipe.ingredientes},{recipe.instrucciones}</Link></li>
                        <DeleteButton recipeId={recipe._id} successCallback={()=>removeFromDom(recipe._id)}></DeleteButton>
                    </div>
                )})};
            
        </div>
    );
}

export default Recipes;


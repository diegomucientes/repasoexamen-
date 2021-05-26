import React,{useState,useEffect} from 'react';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";



const Addrecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const history=useHistory();
  

    const createRecipe= recipe => {
        axios.post('http://localhost:9000/api/recipe/add', recipe)
            .then(res=>{
                setRecipes([...recipes, res.data]);
                console.log(res);
                history.push("/");
            })

    }

    return (
        <div>
            <RecipeForm onSubmitProp={createRecipe} iTitle="" iIngredientes="" iInstrucciones=""/>
        </div>
    );
}

export default Addrecipe;
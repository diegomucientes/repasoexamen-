import React, { useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import axios from 'axios';
import RecipeForm from '../components/RecipeForm';

const Update = (props) => {
   let { id } = useParams();
   const [recipe,setRecipe]=useState("");
   const [loaded, setLoaded] = useState(false);

   const history=useHistory();
   
    useEffect(() => {
        axios.get('http://localhost:9000/api/recipe/'+id)
            .then(res => {
                
                setRecipe(res.data);
                console.log(res.data)
                setLoaded(true);
                
            })
            .catch(err=>err)
    }, [id])
    const updateRecipe = recipe => {
        // e.preventDefault();
        axios.put('http://localhost:9000/api/recipe/' + id, recipe)
            .then(res =>history.push("/"))
            
    }
    return (
        <div>
            <h1>Update a Recipe</h1>
        {loaded && (
        <RecipeForm
          onSubmitProp={updateRecipe}
          iTitle={recipe.title}
          iIngredientes={recipe.ingredientes}
          iInstrucciones={recipe.instrucciones}
        />
      )}
    </div>
    )
}

export default Update;
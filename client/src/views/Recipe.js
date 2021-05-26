import React,{ useEffect, useState }from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';

const Recipe = (props) => {

    let { id } = useParams();
    const [recipe, setrecipe] = useState({});
    useEffect(() => {
        console.log({id})
        axios.get("http://localhost:9000/api/recipe/" + id)
       
            .then(res => setrecipe({
                ...res.data
            }))
    }, [id])
    return (
        <div>
            <p>Title:{recipe.title}</p>
            <p>Price:{recipe.ingredientes}</p>
            <p>Description:{recipe.instrucciones}</p>
            <button><Link to={`/`}>HOME</Link></button>
            <button><Link to={"/recipe/"+recipe._id+"/update"}>Update </Link></button>
        </div>
    );
}

export default Recipe;
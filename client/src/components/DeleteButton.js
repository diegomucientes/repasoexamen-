import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { recipeId, successCallback } = props;
  const deleteRecipe = (e) => {
    axios
      .delete('http://localhost:9000/api/recipe/' + recipeId)
      .then(res => {
        console.log(recipeId);
        successCallback();
      })
    //   .catch((err) => err);
  };
  return (
  <button onClick={deleteRecipe}>Delete Recipe</button>
  )

};

export default DeleteButton;
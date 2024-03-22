import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.kitchensanctuary.com/easy-chicken-curry/";
   let authorPhoto = "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chris-Nicky-Head-Shots-6-500x500.webp";
   let authorName = "Nicky Corbishley";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{width: "200px", objectFit: "contain", borderRadius: "50%", }} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}






const RecipeIngredients = () => {
   const ingredients = ["Chicken Breast", "Curry Powder", "Cumin", "Tomato Paste", "Garlic"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>"Easy Chicken Curry"</h1>
            <p>"A quick and simple mild chicken curry recipe with bags of flavour. Ready in 30 minutes."</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.kitchensanctuary.com/wp-content/uploads/2020/08/Easy-Chicken-Curry-square-FS-117-276x276.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}

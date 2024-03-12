import React from 'react';
import styles from "./Description.module.css";


const RecipeAuthor = () => {
    let authorLink = "https://www.allrecipes.com/recipe/46822/indian-chicken-curry-ii/";
    let authorPhoto = "https://www.allrecipes.com/thmb/LLz2ZmvoPrfOkJwRziltV9OlLCw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Screen-Shot-2021-10-27-at-4.08.51-PM-8aabc9ae23fd4199826b7af3ae65a95f.png";
    let authorName = "Corey Williams"
   
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Corey Williams" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>allrecipes</a> 
           </div>
        </div>
     );
 }

 class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Indian Chicken Curry</h1>
                    <p>Chicken curry from the Indian subcontinent typically features chicken stewed in a tomato-based sauce seasoned with aromatic spices.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
 }





 export default RecipeDescription;
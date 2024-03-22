import { useState } from 'react';

export default function StatusChange () {
// 1.
   const [notes, setNotes] = useState("");
   const [recipeStatus, setRecipeStatus ] = useState(false);
//2
   const handleChange = (event) => {
      setNotes(event.target.value);
   }
//3
   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true)
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
{/* 2 */}
         <p>{notes.length ? notes : "Notes Here" }</p>
{/* 3 */}
         <p>{recipeStatus ? "I have tried it" : "I have not tried this recipe!"}</p>
      </div>
   );
}

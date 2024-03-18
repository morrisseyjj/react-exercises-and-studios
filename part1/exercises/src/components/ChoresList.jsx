import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
          <p className = {classes.choresHeading}>CHORE LIST</p>
         <ol>
            <li className={classes.choresText}>Dishes</li>
            <li className={classes.choresText}>Laundry</li>
            <li className={classes.choresText}>Food Shop</li>
         </ol>
      </div> )
}
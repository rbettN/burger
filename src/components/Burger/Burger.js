/**
 * Component: Creates and presents the burger based on the ingredients selected. 
 * This component is imported in the BurgerBuilder.
 */

import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    /*A default JavaScript object. The 'keys' methods extracts the keys of a given object and turns them into an array (array of keys)*/
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
            .map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
            });
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, []); 
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, add the ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
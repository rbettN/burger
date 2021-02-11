import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    /*A default JavaScript object. The 'keys' methods extracts the keys of a given object and turns it into an array*/
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
            .map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
            });
        })
        .reduce((reductionOperation, initialValue) => {
            return reductionOperation.concat(initialValue)
        }, []); 
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, add the ingredients.</p>
    }
    
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
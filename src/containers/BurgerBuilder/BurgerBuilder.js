import React, {Component} from 'react';
import Aux from '../../highordercomponents/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        /*The properties of this 'ingredients' object must match the 'props.type' that is checked in 'BurgerIngredient.js'*/
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 1
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
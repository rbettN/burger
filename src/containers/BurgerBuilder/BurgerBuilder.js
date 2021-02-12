import React, {Component} from 'react';
import Aux from '../../highordercomponents/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        /*The properties of this 'ingredients' object must match the 'props.type' that is checked in 'BurgerIngredient.js'*/
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 3,
            meat: 10
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
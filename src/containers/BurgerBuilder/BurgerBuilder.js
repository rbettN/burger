/**
 * This component is responsible for building the burger as per inputs from users.
 * It defines the ingredients and the total price of the burger.
 * This component is imported in the App component.
 */

import React, {Component} from 'react';
import Auxiliary from '../../highordercomponents/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../highordercomponents/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        /*The properties of this 'ingredients' object must match the 'props.type' that is checked in 'BurgerIngredient.js'*/
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('https://burgerreact-rbettn-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState (updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
            .map(ingredientKey => {
                return updatedIngredients[ingredientKey];
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    /*This method controls whether the Modal with the order summary is presented to the user*/
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
       //this.setState({loading: true});
       // const order = {
       //     updatedIngredients: this.state.ingredients,
       //     price: this.state.totalPrice,
        //    customer: {
       //         name: 'Rafael Bettoni',
       //         address: {
       //             street: 'Eglinton Ave East',
       //             zipCode: 'M4P 0C1',
      //              country: 'Canada'
       //         },
      //          email: 'bettoni.rafa@gmail.com'
      //      },
      //      deliveryMethod: 'fastest'
      //  }
       // axios.post('/orders.json', order)
      //      .then(response => {
      //         this.setState({loading: false, purchasing: false});
      //      })
      //      .catch(error => {
      //          this.setState({loading: false, purchasing: false});
      //      });/*
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        /*It adds the ingredients information to the search parameter of the URL*/
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render () {
        /*Verify if value of ingredients are less than 0*/
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; /*It assigns True or False to disabledInfo[key];*/
        }

        let orderSummary = null;
        
        /*Display a friendly message of the error occurred to the user in case an error occurs
        to retrieve the Ingredients from Firebase*/
        let burger = this.state.error ? <p>Ingredients can't be loaded. Please, contact the technical support.</p> : <Spinner/>;

        /*Fetch ingredients from Firebase. If ingredients are not null, display ingredients in the Burger and in
        the order summary. If ingredients are null, display the Spinner component*/
        if (this.state.ingredients) {
            burger = (
                <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
                </Auxiliary>
            );
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice}/>;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
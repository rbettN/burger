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
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        // axios.get('https://burgerreact-rbettn-default-rtdb.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true});
        //     });
    }

    updatePurchaseState (updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
            .map(ingredientKey => {
                return updatedIngredients[ingredientKey];
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);
        return sum > 0;
    }

    /*This method controls whether the Modal with the order summary is presented to the user*/
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
 
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
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
            ...this.props.ings
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
        if (this.props.ings) {
            burger = (
                <Auxiliary>
                <Burger ingredients={this.props.ings}/>
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    price={this.props.price}/>
                </Auxiliary>
            );
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}/>;
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

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
/**
 * This is the Root component of the React burger application
 */

import React, { Component } from 'react';
import Layout from './highordercomponents/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
    render() {
      return (
        <div >
          <Layout>
          <BurgerBuilder/>
          <Checkout/>
          </Layout>
        </div>
      );
    }
}

export default App;

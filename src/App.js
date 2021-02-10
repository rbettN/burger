/**
 * This is the Root component of the React burger application
 */

import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;

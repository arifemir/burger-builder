import React from 'react';
import Fragment from "./hoc/Fragment";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


class App extends React.Component{
  render() {
    return (
      <Fragment>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </Fragment>
    );
  }
}

export default App;

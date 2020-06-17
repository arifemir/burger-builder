import React from 'react';
import Fragment from "./hoc/Fragment";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <Fragment>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </Fragment>
  );
}

export default App;

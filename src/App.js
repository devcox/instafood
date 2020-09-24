import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
//css
import MenuTop from './components/menu/menu_top';
import ProductInfo from './components/forms/product_info';
//external files
import store from './redux/stores/menu_store';


const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
      <div>
        <MenuTop/>
      </div>
      </Router>
    </Provider >
  );
}

export default App;

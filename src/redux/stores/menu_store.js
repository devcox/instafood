import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//external files
import menuTag from '../tags/menu_tags';


const InitState = {
    menuBaseTop: [
        { item: 'dashboard', url: '' },
        { item: 'active orders', url: '' },
        { item: 'order history', url: '' },
        { item: 'menu', url: '' },
        { item: 'food products', url: '' },
        { item: 'settings', url: '' }
    ]
};

const reducer = (state = InitState, actions) => {
    switch (actions.type) {
        case menuTag.menuBaseTop.getMenu:
            return state;
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk))

export default store;

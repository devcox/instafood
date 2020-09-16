import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//external files
import menuTag from '../tags/menu_tags';


const InitState = {
    menuBaseTop: [
        { icon: '', item: 'dashboard', url: '' },
        { icon: '', item: 'active ordes', url: '' },
        { icon: '', item: 'order history', url: '' },
        { icon: '', item: 'menu', url: '' },
        { icon: '', item: 'food products', url: '' },
        { icon: '', item: 'settings', url: '' }
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

export default store

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//creating redux stores : it requires reducers, (actions), then apply middleware(thunk,) so we can make AJAX calls

import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'; //helps us connect react and redux
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';






const store = createStore(rootReducer, composeWithDevTools());

//provide the store to react,



ReactDOM.render(<Provider store={store}> 
    <App />
 </Provider>, document.getElementById('root'));
registerServiceWorker();

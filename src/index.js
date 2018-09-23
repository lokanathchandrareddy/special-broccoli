import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//creating redux stores : it requires reducers, (actions), then apply middleware(thunk,) so we can make AJAX calls

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; //helps us connect react and redux
//import thunk for the middleware
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Header from './routes/header';
import LoadingComponent from './components/LoadingComponent';








const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react,

// const Header = () => (
//     <nav className="navbar navbar-default">
//         <div className="container-fluid">
//             <div className="navbar-header">
//                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//                     <span className="icon-bar" />
//                     <span className="icon-bar" />
//                     <span className="icon-bar" />
//                 </button>

//                 <Link className="navbar-brand" to="/"> REACT DAIRY</Link>
//             </div>
//             <div className="collapse navbar-collapse" id ="myNavbar">
//                 <ul className="nav navbar-nav navbar-right">
//                     <li><Link to="/login">Login</Link> </li>
//                 </ul>
//             </div>

//         </div>
//     </nav>
// )


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <LoadingComponent> */}
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={App} exact={true} />
                        <Route path="/login" component={Login} exact={true} />
                    </Switch>
                </div>
            {/* </LoadingComponent> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

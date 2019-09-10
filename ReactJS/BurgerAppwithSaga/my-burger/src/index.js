import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga' 

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';
//import orderSaga from './store/saga/orderSaga';
import {watchBurgerBuilder, watchOrder} from './store/saga/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    {
        burgerBuilder: burgerBuilderReducer,
        order:orderReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk,sagaMiddleware),
        
    )
    );

    
    sagaMiddleware.run(watchOrder);
    sagaMiddleware.run(watchBurgerBuilder);
const app=(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

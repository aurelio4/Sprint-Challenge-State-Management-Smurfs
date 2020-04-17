import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { reducer } from './redux/reducers/mainReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

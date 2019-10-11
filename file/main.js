import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import App from './App.jsx';
import root from './src/services/FormEntry/reduceIndex';

const store = createStore(root);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));
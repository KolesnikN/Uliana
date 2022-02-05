import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/State';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

reportWebVitals();

export default rerenderEntireTree;

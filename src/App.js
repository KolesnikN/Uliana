import React from 'react';
import css from './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Information from "./Information/Information";
import MayMessages from "./Information/MayMessages/MayMessages";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <NavBar/>
                <div className={css.paper}>
                    <Route path='/mayMessages' render={ () => <MayMessages />}/>
                    <Route path='/information' render={ () => <Information />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;



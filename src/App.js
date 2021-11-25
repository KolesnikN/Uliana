import React from 'react';
import css from './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Nav from "./Information";


const App = () => {
    return (
        <div className={css.wrapper}>
            <Header />
            <NavBar />
            <Nav />
        </div>
    )
}

export default App;

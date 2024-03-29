import React from 'react';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import HeaderComponent from "../header/Header";
import ListCardComponent from "../cards/list-cards/ListCardComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>

            <div className="app-container">
                <ListCardComponent/>
            </div>
        </div>
    );
}

export default App;

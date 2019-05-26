import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import BasicSearch from './components/BasicSearch';
import UserProfile from './components/UserProfile';

function App() {
    return (

        <BrowserRouter>
            <Header />
            <h1>Ridemates v 2.0</h1>
            
            <Route path="/" exact component={Header} />
            <Route path="/search" component={BasicSearch} />
            <Route path="/userprofile" component={UserProfile} />
        </BrowserRouter>
    );
}

export default App;

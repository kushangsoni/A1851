import React from 'react';
import logo from './logo.svg';
import './App.css';
import C1851 from './components/C1851';
import C2851 from './components/C2851';
import Navigation from './components/Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

        <div id='container'>
            <Navigation/>

            <Routes>
            <Route exact path="/" element={<C1851/>}/>
            <Route path="/c2851" element={<C2851/>}/>
            </Routes>
            
        </div>
    </BrowserRouter>
    



    );
}

export default App;

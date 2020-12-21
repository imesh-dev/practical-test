import React from 'react'

import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'

import ViewData from './ViewData' 
import Login from './login'

function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Route path="/view" exact component={ViewData}/>
            <Route path="/" exact component={Login}/>
        </BrowserRouter>

    )
}

export default App
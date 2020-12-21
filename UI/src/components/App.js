import React from 'react'

import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'

import ViewData from './ViewData' 
import AddData from './AddData'
import EditData from './EditData'
import Login from './login'

function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Route path="/view" exact component={ViewData}/>
            <Route path="/adddata" component={AddData}/>
            <Route path="/" exact component={Login}/>
            <Route path="/editdata/:id" component={EditData}/>
        </BrowserRouter>

    )
}

export default App
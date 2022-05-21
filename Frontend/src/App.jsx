import React from 'react';
import CreateGroup from './Components/CreateGroup/CreateGroup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
    return(

        <Router>
            <Switch>
                <Route exact path="/" > <CreateGroup/></Route>
            </Switch>
        </Router>

    );
}

export default App;
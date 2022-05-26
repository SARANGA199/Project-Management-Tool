import React from 'react';
import CreateGroup from './Components/CreateGroup/CreateGroup';
import UserList from "./Components/DisplayGroupsList/DisplayGroupList";
import TopicRegister from "./Components/TopicRegister/TopicRegister";
import {RequestSupervisor} from "./Components/RequestSupervisor/RequestSupervisor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
    return(

        <Router>
            <Switch>
                <Route exact path="/m" > <CreateGroup/></Route>
                <Route exact path="/u"><UserList/></Route>
                <Route exact path="/t"><TopicRegister/></Route>
                <Route exact path="/"><RequestSupervisor/></Route>
            </Switch>
        </Router>

    );
}

export default App;
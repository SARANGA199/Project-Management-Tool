import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TemplateForm from './components/template/templateForm/templateForm.jsx';
import Displaytemplate from './components/template/displayTemplate/display.jsx';
function App() {
  return (
    
      <Router>
        <Switch>
            <Route exact path="/"><TemplateForm/></Route>
            <Route exact path="/display"><Displaytemplate/></Route>
        </Switch>
      </Router>
    
  );
}

export default App;

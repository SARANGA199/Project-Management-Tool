import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";

function App() {
    return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" > <Login/></Route>
              <Route exact path="/r" > <Register/></Route>
          </Switch>
      </Router>
    )
  }
  
  export default App;
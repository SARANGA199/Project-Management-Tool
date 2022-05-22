import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";

function App() {
    return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" > <Login/></Route>
          </Switch>
      </Router>
    )
  }
  
  export default App;
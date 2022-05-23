import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";
import ForgotPassword from "./Components/UserManagement/ForgotPassword";
import ResetPassword from "./Components/UserManagement/ResetPassword";

function App() {
    return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" > <Login/></Route>
              <Route exact path="/register" > <Register/></Route>
              <Route exact path="/fpass" > <ForgotPassword/></Route>
              <Route exact path="/rpass" > <ResetPassword/></Route>
          </Switch>
      </Router>
    )
  }
  
  export default App;
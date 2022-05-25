import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";
import ForgotPassword from "./Components/UserManagement/ForgotPassword";
import ResetPassword from "./Components/UserManagement/ResetPassword";
import Profile from "./Components/UserManagement/Profile";
import AllUsers from "./Components/UserManagement/AllUsers";

function App() {
    return (
      <DataProvider>
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/login" > <Login/></Route>
              <Route exact path="/register" > <Register/></Route>
              <Route exact path="/fpass" > <ForgotPassword/></Route>
              <Route exact path="/user/reset/:id" > <ResetPassword/></Route>
              <Route exact path="/profile" > <Profile/></Route>
              <Route exact path="/allusers" > <AllUsers/></Route>
          </Switch>
      </Router>
      </DataProvider>
    )
  }
  
  export default App;
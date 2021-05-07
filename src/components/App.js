import React from "react";
import "../App.css";
import TaskHome from "./TaskHome.js";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import SignIn from "./SignIn";
import PrivateRoute from './PrivateRoute'
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={TaskHome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forgotpassword" component={ForgotPassword} />
          </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

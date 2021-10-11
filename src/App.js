import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Posts from "./Components/Posts";
import Service from "./Components/Service";

function App() {
  const isLoggedin = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services">
          <Service number="5"></Service>
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/posts/:category" component={Posts} />
        <Route exact path="/login">
          {isLoggedin ? <Redirect to="/dashboard" /> : <Home />}
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;

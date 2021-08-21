import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./container/Loginpage/login";
import Register from "./container/Registerpage/register";
import Home from "./container/Homepage/home";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
      </Switch>
    </div>
  );
}

export default App;

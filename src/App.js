import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import Register from "./components/register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

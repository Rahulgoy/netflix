import "./App.css";

import Banner from "./components/Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Rows from "./components/Rows";
import store from "./store";
import { Provider } from "react-redux";
import LoginScreen from "./components/LoginScreen";

function App() {
  const user = null;
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Nav />
              <Banner />
              <Rows />
            </Switch>
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;

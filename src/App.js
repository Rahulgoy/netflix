import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Rows from "./components/Rows";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

import LoginScreen from "./components/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;

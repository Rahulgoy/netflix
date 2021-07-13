import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
      <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route path="/login">
                <SignUpScreen />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/main">
                <Home/>
              </Route>
            </Switch>
    </Provider>
  );
}

export default App;

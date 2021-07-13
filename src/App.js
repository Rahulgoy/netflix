import "./App.css";

import Banner from "./components/Banner";

import Nav from "./components/Nav";
import Rows from "./components/Rows";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
    </div>
  );
}

export default App;

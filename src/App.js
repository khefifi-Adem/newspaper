import './App.css';
import Navbar from "./components/navbar/navBar";
import {
    BrowserRouter as Router,
    Routes,
    Route
    } from "react-router-dom";
import Home from "./pages/home/home";
import LifeStyle from "./pages/lifestyle/lifeStyle";

function App() {
  return (
    <Router history="">
      <div className="App">
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/lifestyle" element={<LifeStyle/>}/>
          </Routes>

    </div>
    </Router>
  );
}

export default App;

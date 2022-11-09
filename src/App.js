import React from "react";
import './App.css';
import About from "./About";
import Calendar from "./Calendar";
import Fitness from "./Fitness";
import Nav from "./Nav";
import Home from "./Home";
import Pricing from "./Pricing";
import Login from "./Login";
import {Route, Routes} from "react-router-dom";
import './index.css';
import './index.js';


function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/about-us" element={<About></About>} />
          <Route path="/calendar" element={<Calendar></Calendar>} />
          <Route path="/fitness" element={<Fitness></Fitness>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/pricing" element={<Pricing></Pricing>} />
          <Route path="/login" element={<Login></Login>}/>
        </Routes>
        </div>
  </>
  )
}
export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TeamList from "./components/Teamlist";
import Scoreboard from "./components/Scoreboard";
import Sportings from "./components/sports";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <>
              <section id="teams" className="pt-20">
              <TeamList />
              </section>
              <section id="sportings" className="pt-10">
              <Sportings  />
              </section>
              <section id="scoreboard" className="pt-16">
              <Scoreboard  />
              </section>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};



export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TeamList from "./components/Teamlist";
import Scoreboard from "./components/Scoreboard";
import Sportings from "./components/sports";
import About from "./pages/About";
import Homepage from "./pages/Home";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={
            <>
              <section id="teams" className="pt-20">
              <TeamList />
              </section>
              <section id="sportings" className="pt-10">
              <Sportings  />
              </section>
              <section id="scoreboard" className="pt-10">
              <Scoreboard  />
              </section>
            </>
          } /> */}
          <Route path="/*" element={<Homepage />}></Route>
          <Route path="/teams" element={<TeamList />}></Route>
          <Route path="/sports" element={<Sportings />}></Route>
          <Route path="/scoreboard" element={<Scoreboard />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};



export default App;

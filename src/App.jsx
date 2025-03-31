import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TeamList from "./components/Teamlist";
import Scoreboard from "./components/Scoreboard";
import Sportings from "./components/sports";
import About from "./pages/About";
import Homepage from "./pages/Home";
import Footer from "./components/footer";
// import Popup from "./components/Popup";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Homepage />} />
            <Route path="/teams" element={<TeamList />} />
            <Route path="/sports" element={<Sportings />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
          </Routes>
        </main>
        {/* <Popup /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

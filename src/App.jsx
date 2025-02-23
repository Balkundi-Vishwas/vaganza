import Header from "./components/Header";
import TeamList from "./components/Teamlist";
import Scoreboard from "./components/Scoreboard";
import Sportings from "./components/sports";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <TeamList />
      <Sportings />
      <Scoreboard />
    </div>
  );
};

export default App;

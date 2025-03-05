import { useState } from "react";
import teamsData from "../../data.json";

const Scoreboard = () => {
  const [scores, setScores] = useState(teamsData.scores);

  const calculateTotal = (team) => {
    return scores[team].gold * 3 + scores[team].silver * 2 + scores[team].bronze * 1;
  };

  return (
    <div className="p-5 pt-20 mb-12">
      <h2 className="text-center text-3xl font-bold text-blue-700">📊 Team Scoreboard</h2>

      <p className="text-center text-gray-600 mt-2">
        🥇 <span className="text-yellow-500 font-bold">Gold = 3 points</span>, 
        🥈 <span className="text-gray-500 font-bold">Silver = 2 points</span>, 
        🥉 <span className="text-orange-500 font-bold">Bronze = 1 point</span>
      </p>

      <div className="overflow-x-auto mt-5">
        <table className="w-3/4 mx-auto border-collapse border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-lg">
              <th className="p-3 border">Team</th>
              <th className="p-3 border">🥇 Gold</th>
              <th className="p-3 border">🥈 Silver</th>
              <th className="p-3 border">🥉 Bronze</th>
              <th className="p-3 border">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(scores)
              .sort((a, b) => calculateTotal(b) - calculateTotal(a))
              .map((team, index) => (
                <tr
                  key={index}
                  className={`text-center bg-white hover:bg-gray-100 transition-all ${
                    index === 0 ? "bg-yellow-100 font-bold" : ""
                  }`}
                >
                  <td className="p-3 border">{team}</td>
                  <td className="p-3 border">{scores[team].gold}</td>
                  <td className="p-3 border">{scores[team].silver}</td>
                  <td className="p-3 border">{scores[team].bronze}</td>
                  <td className="p-3 border font-bold">{calculateTotal(team)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;

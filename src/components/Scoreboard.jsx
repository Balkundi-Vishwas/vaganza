import { useState } from "react";
import teamsData from "../../data.json";

const Scoreboard = () => {
  const [scores, setScores] = useState(teamsData.scores);

  const calculateTotal = (team) => {
    return (
      scores[team].gold * 3 + scores[team].silver * 2 + scores[team].bronze * 1
    );
  };

  return (
    <div className="p-5 pt-20 mb-12">
      <h2 className="text-center text-3xl font-bold text-[#17202a]">
        📊 Team Scoreboard
      </h2>

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
              .sort((a, b) => {
                const totalA = calculateTotal(a);
                const totalB = calculateTotal(b);
                if (totalA !== totalB) return totalB - totalA; // Sort by total score
                if (scores[a].gold !== scores[b].gold)
                  return scores[b].gold - scores[a].gold; // Sort by gold
                return scores[b].silver - scores[a].silver; // Sort by silver
              })
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
                  <td className="p-3 border font-bold">
                    {calculateTotal(team)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"> 
        <p className="text-center text-gray-600 mt-2">
          🥇 <span className="text-yellow-500 font-bold">Gold = 3 points</span>{" "}
          <br />
          🥈 <span className="text-gray-500 font-bold">
            Silver = 2 points
          </span>{" "}
          <br />
          🥉 <span className="text-orange-500 font-bold">Bronze = 1 point</span>
        </p>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        <p className="text-center text-sm text-gray-500 mt-3 italic">
          *If two teams have the same total points, the team with more
          <span className="text-yellow-500 font-semibold"> Gold medals </span>
          will be ranked higher. If Gold medals are also equal,
          <span className="text-gray-500 font-semibold"> Silver medals </span>
          will determine the rank.*
        </p>
      </div>
    </div>
  );
};

export default Scoreboard;

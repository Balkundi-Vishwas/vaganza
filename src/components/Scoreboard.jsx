import { useState } from "react";
import teamsData from "../../data.json"

const Scoreboard = () => {
  const [scores, setScores] = useState(teamsData.scores);

  // const updateScore = (team, medal) => {
  //   const updatedScores = { ...scores };
  //   updatedScores[team][medal] += 1;
  //   setScores(updatedScores);
  // };

  const calculateTotal = (team) => {
    return scores[team].gold * 3 + scores[team].silver * 2 + scores[team].bronze * 1;
  };

  return (
    <div className="p-5">
      <h2 className="text-center text-2xl font-bold">📊 Team Scoreboard</h2>
      <div className="overflow-x-auto">
        <table className="w-3/4 mx-auto mt-5 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Team</th>
              <th className="p-3 border">🥇 Gold</th>
              <th className="p-3 border">🥈 Silver</th>
              <th className="p-3 border">🥉 Bronze</th>
              <th className="p-3 border">Total Points</th>
              {/* <th className="p-3 border">Update</th> */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(scores).map((team, index) => (
              <tr key={index} className="text-center bg-white hover:bg-gray-100">
                <td className="p-3 border font-semibold">{team}</td>
                <td className="p-3 border">{scores[team].gold}</td>
                <td className="p-3 border">{scores[team].silver}</td>
                <td className="p-3 border">{scores[team].bronze}</td>
                <td className="p-3 border font-bold">{calculateTotal(team)}</td>
                {/* <td className="p-3 border">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded m-1" onClick={() => updateScore(team, "gold")}>+🥇</button>
                  <button className="bg-gray-400 text-white px-3 py-1 rounded m-1" onClick={() => updateScore(team, "silver")}>+🥈</button>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded m-1" onClick={() => updateScore(team, "bronze")}>+🥉</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;

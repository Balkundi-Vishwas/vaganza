import teamsData from "../../data.json";
import { useState } from "react";

const TeamList = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [popup, setPopup] = useState(false);

  const handleTeamOpen = (team) => {
    setPopup(true);
    setSelectedTeam(selectedTeam === team ? null : team);
  };
  const handleClose = () => {
    setPopup(false);
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-5">
        🏅 Participating Teams
      </h2>
      <div className="flex flex-wrap justify-center mt-5">
        {teamsData.teams.map((team, index) => (
          <div key={index} className="m-5 text-center">
            <img
              src={`/images/${team.name.replace(" ", "%20")}.jpeg`}
              onClick={() => handleTeamOpen(team)}
              alt={team.name}
              className="w-32 h-32 object-contain mx-auto rounded-lg shadow-md cursor-pointer"
            />
            <h3 className="mt-2 text-lg font-semibold">{team.name}</h3>
          </div>
        ))}
      </div>

      {popup && selectedTeam && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          {/* Popup Content */}
          <div className="bg-white rounded-2xl w-[85%] max-w-screen-md max-h-screen p-4 py-8 overflow-hidden relative">
            {/* Close button */}
            <h1 className="text-2xl font-bold text-center">
              {selectedTeam.name}
            </h1>
            <span
              onClick={handleClose}
              className="bg-gray-400 rounded-full flex items-center justify-center text-3xl font-bold uppercase absolute right-1.5 top-2 w-8 h-8 text-white hover:bg-blue-200 hover:duration-200 cursor-pointer"
            >
              X
            </span>

            {/* Scrollable Content */}
            <div className="mt-4 p-3 border border-gray-300 rounded-lg shadow-md h-[60vh] overflow-y-auto custom-scroll">
              <p className="text-gray-700">
                {selectedTeam.description}
              </p>
              <h2 className="text-xl font-semibold mt-1 mb-1">Contributors:</h2>
              {selectedTeam.contributors.map((cont,index) => (
                <p className="text-lg"> {cont}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamList;

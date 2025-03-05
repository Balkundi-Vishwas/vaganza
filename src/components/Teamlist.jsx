import teamsData from "../../data.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TeamList = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [popup, setPopup] = useState(false);

  const handleTeamOpen = (team) => {
    setPopup(true);
    setSelectedTeam(team);
  };

  const handleClose = () => {
    setPopup(false);
    setTimeout(() => setSelectedTeam(null), 300);
  };

  return (
    <div className="pt-20">
      <h2 className="text-center text-3xl font-bold text-[#17202a]">
        🏆 Participating Teams 🏆
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Click on a team to learn more!
      </p>

      <div className="flex flex-wrap justify-center mt-6 mb-10 gap-6">
        {teamsData.teams.map((team, index) => (
          <motion.div
            key={index}
            className="text-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTeamOpen(team)}
          >
            <img
              src={`/images/${team.name.replace(" ", "%20")}.jpeg`}
              alt={team.name}
              className="w-36 h-36 object-cover mx-auto rounded-xl shadow-lg"
            />
            <h3 className="mt-2 text-xl font-semibold text-gray-800">
              {team.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {popup && selectedTeam && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl w-[90%] max-w-2xl max-h-[75vh] p-6 shadow-2xl relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 bg-gray-300 hover:bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              >
                ✖
              </button>

              {/* Team Details */}
              <h1 className="text-3xl font-bold text-center text-blue-700">
                {selectedTeam.name}
              </h1>
              <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md h-[50vh] overflow-y-auto custom-scroll">
                <p className="text-gray-500 text-lg">{selectedTeam.description}</p>

                {/* Contributors */}
                <h2 className="text-xl font-semibold mt-3 mb-2 text-gray-900">🎖 Contributors:</h2>
                <ul className="list-decimal list-inside text-gray-800">
                  {selectedTeam.contributors.map((cont, index) => (
                    <li key={index} className="mb-2 text-lg">{cont}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamList;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import teamsData from "../../data.json";

const Sportings = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleSportClick = (sport) => {
    setSelectedSport(selectedSport === sport ? null : sport);
  };

  const handleClose = () => {
    setSelectedSport(null);
  };

  return (
    <div className="pt-20 p-5">
      <h2 className="text-center text-3xl font-bold text-[#17202a]">🏅 Sports</h2>
      <p className="text-center text-gray-600 mt-2">Click on a sport to see details!</p>

      <div className="flex flex-wrap justify-center mt-6 gap-6">
        {Object.keys(teamsData.sports).map((sport, index) => (
          <motion.div
            key={index}
            className="text-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSportClick(sport)}
          >
            <img
              src={`/images/${sport.replace(" ", "%20")}.jpg`}
              alt={sport}
              className="w-36 h-36 object-cover mx-auto rounded-xl shadow-lg"
            />
            <h3 className="mt-2 text-xl font-semibold text-gray-800">{sport}</h3>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedSport && (
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
                className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              >
                ✖
              </button>

              {/* Sport Details */}
              <h2 className="text-3xl font-bold text-center text-[#17202a]">{selectedSport}</h2>
              <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md h-[50vh] overflow-y-auto custom-scroll">
                <SportDetails sport={selectedSport} data={teamsData.sports[selectedSport]} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SportDetails = ({ sport, data }) => {
  return (
    <div className="mt-4">
      {sport === "Badminton" ? (
        <>
          <h3 className="text-lg font-semibold">🏸 Single</h3>
          <SportCategory categoryData={data.Single} />
          <h3 className="text-lg font-semibold mt-4">🏸 Double</h3>
          <SportCategory categoryData={data.Double} />
        </>
      ) : sport === "Cricket" ? (
        <>
          <h3 className="text-lg font-semibold">🏏 Short Boundary</h3>
          <SportCategory categoryData={data.Short_Boundry} />
          <h3 className="text-lg font-semibold mt-4">🏏 Long Boundary</h3>
          <SportCategory categoryData={data.Long_Boundry} />
        </>
      ) : sport === "Athletics" ? (
        <>
          <h3 className="text-lg font-semibold">100 Meters</h3>
          <SportCategory categoryData={data.hundred_meters} />
          <h3 className="text-lg font-semibold mt-4">Relay</h3>
          <SportCategory categoryData={data.Relay} />
          <h3 className="text-lg font-semibold mt-4">Long Jump</h3>
          <SportCategory categoryData={data.Long_Jump} />
          <h3 className="text-lg font-semibold mt-4">Javelin Throw</h3>
          <SportCategory categoryData={data.javlin_throw} />
          <h3 className="text-lg font-semibold mt-4">Short Put</h3>
          <SportCategory categoryData={data.shortput} />
        </>
      ) : (
        <SportCategory categoryData={data} />
      )}
    </div>
  );
};

const SportCategory = ({ categoryData }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Object.entries(categoryData).map(([gender, winners]) => (
        <div key={gender} className="border p-4 rounded-md shadow-md w-64 bg-gray-100">
          <h4 className="font-semibold text-blue-800">{gender}</h4>
          <p>🥇 Gold: {winners.gold || "N/A"}</p>
          <p>🥈 Silver: {winners.silver || "N/A"}</p>
          <p>🥉 Bronze: {winners.bronze || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default Sportings;

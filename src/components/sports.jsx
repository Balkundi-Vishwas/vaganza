import { useState } from "react";
import teamsData from "../../data.json";

const Sportings = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  // const [popup, setPopup] = useState(true);

  const handleSportClick = (sport) => {
    setSelectedSport(selectedSport === sport ? null : sport);
  };
  const handleClose = () => {
    setSelectedSport(false);
  };
  return (
    <div className="p-5">
      <h2 className="text-center text-2xl font-bold mt-5">🏆 Sports</h2>
      <div className="flex flex-wrap justify-center mt-5">
        {Object.keys(teamsData.sports).map((sport, index) => (
          <div
            key={index}
            className="m-5 text-center cursor-pointer"
            onClick={() => handleSportClick(sport)}
          >
            <img
              src={`/images/${sport.replace(" ", "%20")}.jpg`}
              alt={sport}
              className="w-32 h-32 object-contain mx-auto rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <h3 className="mt-2 text-lg font-semibold">{sport}</h3>
          </div>
        ))}
      </div>

      {selectedSport && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          {/* Popup Content */}
          <div className="bg-white rounded-2xl w-[80%] max-w-screen-md max-h-screen p-4 py-8 overflow-hidden relative">
            {/* Close button */}
            <h2 className="text-xl font-bold text-center">
                {selectedSport} Details
              </h2>
            <span
              onClick={handleClose}
              className="bg-gray-400 rounded-full flex items-center justify-center text-3xl font-bold uppercase absolute right-1.5 top-2 w-8 h-8 text-white hover:bg-blue-200 hover:duration-200 cursor-pointer"
            >
              X
            </span>

            {/* Scrollable Content */}
            <div className="mt-6 p-3 border border-gray-300 rounded-lg shadow-md h-[60vh] overflow-y-auto custom-scroll">
              <SportDetails
                sport={selectedSport}
                data={teamsData.sports[selectedSport]}
              />
            </div>
          </div>
        </div>
      )}
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
          <h3 className="text-lg font-semibold">🏏 Short Boundry</h3>
          <SportCategory categoryData={data.Short_Boundry} />
          <h3 className="text-lg font-semibold mt-4">🏏 Long Boundry</h3>
          <SportCategory categoryData={data.Long_Boundry} />
        </>
      ) : (
        <>
          <SportCategory categoryData={data} />
        </>
      )}
    </div>
  );
};

const SportCategory = ({ categoryData }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Object.entries(categoryData).map(([gender, winners]) => (
        <div key={gender} className="border p-4 rounded-md shadow-sm w-64">
          <h4 className="font-semibold">{gender}</h4>
          <p>🥇 Gold: {winners.gold || "N/A"}</p>
          <p>🥈 Silver: {winners.silver || "N/A"}</p>
          <p>🥉 Bronze: {winners.bronze || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default Sportings;

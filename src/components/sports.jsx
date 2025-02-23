import { useState } from "react";
import teamsData from "../../data.json";

const Sportings = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleSportClick = (sport) => {
    setSelectedSport(selectedSport === sport ? null : sport);
  };

  return (
    <div className="p-5">
      <h2 className="text-center text-2xl font-bold mt-5">🏆 Sportings</h2>
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
        <div className="mt-6 p-3 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center">
            {selectedSport} Details
          </h2>
          <SportDetails
            sport={selectedSport}
            data={teamsData.sports[selectedSport]}
          />
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

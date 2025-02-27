import teamsData from "../../data.json";
import { useState } from "react";

import Tooltip from '@mui/material/Tooltip';

const TeamList = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipOpen = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-5">🏅 Participating Teams</h2>
      <div className="flex flex-wrap justify-center mt-5">
      {teamsData.teams.map((team, index) => (
          <div key={index} className="m-5 text-center">
            <Tooltip
              title={team.description}
              placement="bottom"
              open={activeTooltip === index}
            arrow>
              <img
                src={`/images/${team.name.replace(" ", "%20")}.jpeg`}
                onClick={() => handleTooltipOpen(index)}
                alt={team.name}
                className="w-32 h-32 object-contain mx-auto rounded-lg shadow-md cursor-pointer"
              />
            </Tooltip>
            <h3 className="mt-2 text-lg font-semibold">{team.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;

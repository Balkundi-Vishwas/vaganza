import teamsData from "../../data.json";

const TeamList = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-5">🏅 Participating Teams</h2>
      <div className="flex flex-wrap justify-center mt-5">
        {teamsData.teams.map((team, index) => (
          <div key={index} className="m-5 text-center">
            <img src={`/images/${team.name.replace(" ", "%20")}.jpeg`} alt={team.name} className="w-32 h-32 object-contain mx-auto rounded-lg shadow-md" />
            <h3 className="mt-2 text-lg font-semibold">{team.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;

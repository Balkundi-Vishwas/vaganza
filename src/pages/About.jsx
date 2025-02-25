import React, { useEffect, useState } from "react";
import teamsData from "../../data.json";

const About = () => {

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* <h1 className="text-4xl font-bold text-center text-blue-700">Yuva Vaganza 2025</h1> */}
      <img src={`/yuvavaganza.jpeg`} alt={"yuva vaganza"} className="w-[12rem] h-[12rem] object-contain mx-auto rounded-lg shadow-md mt-4 mb-4" />
      <p className="text-lg text-center text-gray-700 mt-4">
        Welcome to Yuva Vaganza 2025! This event brings together top teams to showcase their skills and sportsmanship.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Participating Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {teamsData.teams.map((team, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
            <p className="text-gray-600 mt-2">{team.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8">Organizers</h2>
      <p className="text-lg text-gray-700 mt-2">
        This event is organized by a dedicated team committed to making Yuva Vaganza 2025 a success. Stay tuned for more updates!
      </p>
    </div>
  );
};

export default About;

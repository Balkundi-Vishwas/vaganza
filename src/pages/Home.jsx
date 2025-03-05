import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-20">
      {/* Event Title */}
      <div className="text-center mb-8">
        <img src="/images/sit_logo.jpeg" alt="Organization Logo" className="w-24 mx-auto mb-4 rounded-full" />
        <h2 className="text-2xl font-bold">Sree Siddaganga College Of Pharmacy</h2>
        <p className="text-gray-600">Empowering students through sports and teamwork.</p>
      </div>

      <motion.img 
        src="/yuvavaganza.jpeg" 
        alt="Yuva Vaganza Event" 
        className="w-48 rounded-sm shadow-lg mb-6" 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
      />
      
      {/* Event Description */}
      <motion.div 
        className="text-lg text-gray-700 text-center max-w-2xl mb-6 bg-white p-6 rounded-lg shadow-lg" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-bold text-blue-700 mb-4">Yuva Vaganza - 2025</h3>
        <p>
          Yuva Vaganza is the premier sporting event of Sree Siddaganga College Of Pharmacy, designed to ignite the competitive spirit among pharmacy students.
          This grand annual event brings together talent, determination, and teamwork, fostering a culture of sportsmanship and excellence.
        </p>
      </motion.div>

      <motion.div 
        className="text-lg text-gray-700 text-center max-w-2xl mb-6 bg-white p-6 rounded-lg shadow-lg" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <p>
          With eight dynamic teams—<span className="font-semibold">Falcons, Wild Thunders, Team Spirit, Masters, Brutal Soldiers, Dominators, Phantom, and Rising Stars</span>—battling for supremacy,
          the tournament features thrilling competitions in <span className="font-semibold">Carrom, Chess, Badminton and Cricket</span>. The structured point system ensures a fair and intense contest, where every match adds to the excitement.
        </p>
      </motion.div>
      
      <motion.div 
        className="text-lg text-gray-700 text-center max-w-2xl mb-6 bg-white p-6 rounded-lg shadow-lg" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <p>
          Beyond just competition, Yuva Vaganza is a celebration of passion, perseverance, and unity. It’s not just about winning medals but creating lasting memories, forging friendships,
          and inspiring the next generation of champions.
        </p>
      </motion.div>
      
      <motion.div 
        className="text-lg text-gray-700 text-center max-w-2xl mb-6 bg-white p-6 rounded-lg shadow-lg" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-blue-700 text-xl">Get ready to witness unmatched energy, fierce rivalries, and moments of glory as the best of the best take center stage.</p>
        <p className="text-2xl font-bold text-red-600 mt-2">Let the games begin! 🏆🔥</p>
      </motion.div>

      {/* Founder Details */}
      
    </div>
  );
};

export default Homepage;
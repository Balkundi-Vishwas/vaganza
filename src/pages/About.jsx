import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 md:px-12">
      {/* Principal and Sports Incharge */}
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >

        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img src="/images/sivakumar_swamiji.jpeg" alt="Principal" className="w-40 h-40 mx-auto rounded-full mb-4 border-4 border-yellow-500" />
          <h3 className="text-lg font-semibold text-gray-800">ಡಾ. ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಶಿವಕುಮಾರ ಸ್ವಾಮೀಜಿ</h3>
          <p className="text-gray-600">ಸ್ಥಾಪಕರು</p>
        </div>

        {/* Principal */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img src="/images/principal_sir.png" alt="Principal" className="w-40 h-40 mx-auto rounded-full mb-4 border-4 border-blue-500" />
          <h3 className="text-lg font-semibold text-gray-800">Dr. Suresh V Kulkarni</h3>
          <p className="text-gray-500">Principal (SSCP)</p>
          <p className="text-gray-600 font-semibold">+91 94492945721</p>
        </div>
        {/* Sports Incharge */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img src="/images/sports_sir.jpeg" alt="Sports Incharge" className="w-40 h-40 mx-auto rounded-full mb-4 border-4 border-green-500" />
          <h3 className="text-lg font-semibold text-gray-800">Sagar T.R</h3>
          <p className="text-gray-500">Sports Coordinator</p>
          <p className="text-gray-600 font-semibold">+91 9036776636</p>
        </div>
      </motion.div>

      {/* Organized by Students */}
      <motion.div 
        className="mt-12 text-center bg-white p-6 rounded-lg shadow-lg" 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-blue-700">Organized by 4th year B.Pharm Students (2024-25) - Dominators</h3>
      </motion.div>
      
      {/* Inquiry Section */}
      <motion.div 
        className="mt-12 bg-white p-6 rounded-lg shadow-lg text-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-2 text-gray-800">For More Inquiries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-500 font-semibold">
          <p>Abhishek G R - +91 8904145043</p>
          <p>Abhishek Balkundi - +91 9986365036</p>
          <p>Siddesh - +91 9740673221</p>
        </div>
      </motion.div>

      {/* Developer Info */}
      <motion.div 
        className="mt-12 mb-12 bg-white p-6 rounded-lg shadow-lg text-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Website Developed By</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-500 font-semibold">
          <p>Vishwas Balkundi</p>
          <p>vishwasbalkundi06@gmail.com</p>
          <p>+91 9513706439</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
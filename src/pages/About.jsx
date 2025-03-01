import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 ml-2 mr-2">
      {/* Organization Info */}
      <div className="text-center mb-8">
        <img src="/images/sit_logo.jpeg" alt="Organization Logo" className="w-32 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Sree Siddaganga College Of Pharmacy</h2>
        <p className="text-gray-600">Empowering students through sports and teamwork.</p>
      </div>

      {/* Founder Section */}
      <div className="flex flex-col items-center mb-8">
        <img src="/images/sivakumar_swamiji.jpeg" alt="Founder" className="w-40 h-40 rounded-full mb-4" />
        <h2 className="text-xl font-semibold">Dr. Sivakumara Swamy</h2>
        <p className="text-gray-500">Founder</p>
      </div>

      {/* Principal and Sports Incharge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Principal */}
        <div>
          <img src="/images/principal_sir.png" alt="Principal" className="w-40 h-40 mx-auto rounded-full mb-4" />
          <h3 className="text-lg font-semibold">Dr. Suresh V Kulkarni</h3>
          <p className="text-gray-500">Principal</p>
        </div>
        {/* Sports Incharge */}
        <div>
          <img src="/images/principal_sir.png" alt="Sports Incharge" className="w-40 h-40 mx-auto rounded-full mb-4" />
          <h3 className="text-lg font-semibold">Sagar T.R</h3>
          <p className="text-gray-500">Sports Coordinator</p>
        </div>
      </div>

      {/* Organized by Students */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Organized by 4th year B.Pharm Students(2024-25) - Dominators</h3>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-gray-600">Abhishek - 9876543210</p>
          <p className="text-gray-600">Abhishek - 9876543211</p>
        </div> */}
      </div>
      <div className="mt-12 bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-4">For More Inquiries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 text-gray-600">
          <p> Abhishek G R - +91 8904145043</p>
          <p> Abhishek Balkundi - +91  9986365036</p>
          <p> Siddesh - +91 9740673221</p>
        </div>
      </div>

      {/* Developer Info */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-2">Website Developed By</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 text-gray-600">
          <p> Vishwas Balkundi</p>
          <p> vishwasbalkundi06@gmail.com</p>
          <p> +91 9513706439</p>
        </div>
      </div>
    </div>
  );
};

export default About;


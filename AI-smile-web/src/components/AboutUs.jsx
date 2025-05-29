import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animations occur only once
    });
  }, []);

  return (
    <div className="py-12 bg-white">
      {/* Heading with AOS */}
      <h2
        className="text-4xl font-bold text-black mb-8 pl-4 md:pl-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        About Us
      </h2>

      {/* Content Section with AOS */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-8">
        {/* Text Section with fade-right */}
        <div
          className="md:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <ul className="list-disc pl-5 space-y-4 text-gray-800 text-lg">
            <li style={{ textAlign: "start", color: "#333333", fontSize: "18px", fontWeight: "600" }}>
              We’re Building a Smarter Way to Connect Patients with the Right Dental Care.
            </li>
            <li style={{ textAlign: "start", color: "#333333", fontSize: "18px", fontWeight: "600" }}>
              Our AI-Powered Platform Helps Users Upload a Simple Photo of Their Teeth and Instantly Get Matched with the Most Suitable Providers Based on Their Oral Condition.
            </li>
            <li style={{ textAlign: "start", color: "#333333", fontSize: "18px", fontWeight: "600" }}>
              Whether It’s for Braces, a Cavity, or Just a Check-Up, Our System Uses Dental Data and Machine Learning to Guide You.
            </li>
          </ul>
        </div>

        {/* Images Section with fade-left */}
        <div
          className="md:w-1/2 flex flex-col gap-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            className="h-80"
            src="/src/assets/aboutus.svg"
            alt="Dentist examining patient"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
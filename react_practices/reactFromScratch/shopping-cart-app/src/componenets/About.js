import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold text-blue-600">Olusola Taofeek</span>, a passionate and dedicated Fullstack Engineer with a strong foundation in building efficient, scalable, and user-friendly applications.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          With expertise in JavaScript, TypeScript, and Python, I create solutions that bridge the gap between seamless user experiences and robust backend architectures.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I have built a variety of projects showcasing my proficiency in React, Redux, Node.js, and Express. I enjoy crafting responsive web interfaces, building backend APIs with PostgreSQL and MongoDB, and containerizing applications using Docker.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I’m a fast learner who thrives on solving problems, learning new things, and adapting to different challenges.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">🔹 Career Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Developed and deployed multiple full-stack applications including real estate, job seeker, and expense tracker platforms.</li>
            <li>Designed responsive UIs and implemented dynamic features using React.</li>
            <li>Containerized and deployed applications using Docker.</li>
            <li>Earned certifications in Python, Responsive Web Design, and Full Stack Development.</li>
          </ul>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I’m deeply motivated by the opportunity to contribute to impactful projects and collaborate in meaningful ways. My goal is to master fullstack development and use my skills to drive success in any organization I’m part of.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          When I’m not coding, I enjoy learning new technologies, sharing insights, and working with others to solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;

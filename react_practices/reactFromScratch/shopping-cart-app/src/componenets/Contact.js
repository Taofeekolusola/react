import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">📬 Contact Me</h1>
        <h3 className="text-xl text-gray-700 mb-6 text-center">Feel Free To Reach Out</h3>

        <div className="text-center space-y-4">
          <p className="text-gray-800 text-lg">📧 <span className="font-medium">olusolataofeek@gmail.com</span></p>
          <p className="text-gray-800 text-lg">📞 <span className="font-medium">09063659635</span></p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/Taofeekolusola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-lg font-medium transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adeshina123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/TaofeekOlusola1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black text-lg font-medium transition"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
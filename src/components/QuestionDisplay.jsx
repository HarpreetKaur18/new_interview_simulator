import React, { useState, useRef, useEffect } from "react";
import questionBank from "../data/questions";

function QuestionDisplay() {
  const [selectedRole, setSelectedRole] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getRandomQuestion = () => {
    if (!selectedRole) return;
    const questions = questionBank[selectedRole] || [];
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Handle role selection
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-white max-w-4xl mx-auto mt-8 z-10">
      <h2 className="text-2xl font-bold mb-6">🎯 Interview Question</h2>

      <div className="mb-6 relative">
        <label className="block text-white font-semibold mb-2">
          👤 Select Your Job Role:
        </label>

        <div className="relative" ref={dropdownRef}>
          {/* Custom dropdown button */}
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full px-4 py-2 text-left bg-gray-700 text-white rounded-lg border border-gray-600 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            {selectedRole || "-- Select a Role --"}
          </button>

          {/* Custom dropdown menu */}
          {isOpen && (
            <div className="absolute mt-1 w-full bg-gray-800 text-white rounded-lg shadow-lg z-20">
              <div className="max-h-60 overflow-y-auto py-1">
                {Object.keys(questionBank).map((role) => (
                  <div
                    key={role}
                    className="px-4 py-2 hover:bg-purple-600 cursor-pointer"
                    onClick={() => handleRoleSelect(role)}
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {currentQuestion ? (
        <p className="text-lg text-white italic mb-6">"{currentQuestion}"</p>
      ) : (
        <p className="text-white mb-6">Click below to get a random question!</p>
      )}

      <button
        onClick={getRandomQuestion}
        disabled={!selectedRole}
        className={`px-6 py-3 rounded-lg font-bold transition transform hover:scale-105 ${
          selectedRole
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
      >
        🔁 Get Question
      </button>
    </div>
  );
}

export default QuestionDisplay;
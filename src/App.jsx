import React, { useState } from "react";
import QuestionDisplay from "./components/QuestionDisplay";
import Recorder from "./components/Recorder";
import History from "./components/History";

function App() {
  const [viewHistory, setViewHistory] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 space-y-8 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h1 className="text-4xl font-bold mt-6 backdrop-blur-md bg-white/5 px-6 py-4 rounded-2xl shadow-2xl">
        🎤 Interview Practice Simulator
      </h1>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => setViewHistory(false)}
          className={`px-6 py-2 rounded-xl font-semibold transition transform hover:scale-105 ${
            !viewHistory
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-white"
          } backdrop-blur-md hover:bg-purple-700 hover:text-white`}
        >
          🎤 Practice Mode
        </button>
        <button
          onClick={() => setViewHistory(true)}
          className={`px-6 py-2 rounded-xl font-semibold transition transform hover:scale-105 ${
            viewHistory
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-white"
          } backdrop-blur-md hover:bg-purple-700 hover:text-white`}
        >
          📋 View History
        </button>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl mt-8">
          {!viewHistory ? (
            <>
              <QuestionDisplay />
              <Recorder />
            </>
          ) : (
            <History />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

function History() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem("interviewSessions")) || [];
    setSessions(storedSessions.reverse());
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400">📋 Practice History</h2>

      {sessions.length === 0 ? (
        <p className="text-gray-400">No practice sessions yet. Go practice! 🎤</p>
      ) : (
        <div className="space-y-6 px-4">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="border border-gray-600 p-6 rounded-2xl bg-gray-800 text-left shadow-md hover:shadow-2xl transition max-w-3xl mx-auto"
            >
              <p className="text-sm text-gray-400 mb-2">📅 {session.date}</p>
              <p className="mb-1 text-gray-100">⭐ <strong>Self Rating:</strong> {session.rating || "N/A"} Stars</p>
              <p className="mb-1 text-gray-100">⭐ <strong>System Rating:</strong> {session.systemRating || "N/A"} Stars</p>
              <p className="mb-1 text-gray-100">🧠 <strong>System Feedback:</strong> {session.feedback || "N/A"}</p>
              <p className="text-gray-300"><strong>📝 Transcript Preview:</strong> {session.transcript?.slice(0, 100) || "N/A"}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;

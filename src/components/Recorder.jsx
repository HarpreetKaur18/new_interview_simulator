import React, { useState, useRef, useEffect } from "react";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [showReview, setShowReview] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);
  const transcriptBoxRef = useRef(null);

  // Scroll transcript box to bottom whenever transcript changes
  useEffect(() => {
    if (transcriptBoxRef.current) {
      transcriptBoxRef.current.scrollTop = transcriptBoxRef.current.scrollHeight;
    }
  }, [finalTranscript, interimTranscript]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
        audioChunksRef.current.push(event.data);
      });

      mediaRecorderRef.current.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunksRef.current);
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        setShowReview(true);
      });

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setFinalTranscript("");
      setInterimTranscript("");

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        const recognition = recognitionRef.current;
        
        // Optimize recognition settings
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;
        recognition.lang = "en-US";

        // Use a separate handler for results to improve responsiveness
        recognition.onresult = handleRecognitionResult;
        
        // Handle recognition errors
        recognition.onerror = (event) => {
          console.error("Speech recognition error", event.error);
          
          // Restart recognition if it errors but we're still recording
          if (isRecording && event.error !== "no-speech" && event.error !== "aborted") {
            try {
              recognition.start();
            } catch (e) {
              console.error("Failed to restart recognition", e);
            }
          }
        };
        
        // If recognition ends but we're still recording, restart it
        recognition.onend = () => {
          if (isRecording && recognitionRef.current) {
            try {
              recognition.start();
            } catch (e) {
              console.error("Failed to restart recognition", e);
            }
          }
        };

        recognition.start();
      }
    } catch (err) {
      console.error("Error starting recording:", err);
    }
  };

  const handleRecognitionResult = (event) => {
    let currentInterimTranscript = "";
    let newFinalText = "";
    let isFinalAdded = false;

    // Process results
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      
      if (event.results[i].isFinal) {
        newFinalText += transcript + " ";
        isFinalAdded = true;
      } else {
        currentInterimTranscript += transcript;
      }
    }

    // Update final transcript if we have new final text
    if (isFinalAdded) {
      setFinalTranscript(prev => (prev + newFinalText).trim());
    }
    
    // Always update interim transcript
    setInterimTranscript(currentInterimTranscript);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    
    // Add any remaining interim text to final transcript
    if (interimTranscript) {
      setFinalTranscript(prev => 
        prev ? `${prev} ${interimTranscript}` : interimTranscript
      );
      setInterimTranscript("");
    }
  };

  const resetRecording = () => {
    setIsRecording(false);
    setAudioURL("");
    setFinalTranscript("");
    setInterimTranscript("");
    setShowReview(false);
    
    // Make sure to stop any active media tracks
    if (mediaRecorderRef.current && mediaRecorderRef.current.stream) {
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="relative z-0 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-white max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">🎙️ Your Answer</h2>

      <div className="flex justify-center space-x-4 mb-6">
        {!isRecording && !showReview && (
          <button
            onClick={startRecording}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg transition transform hover:scale-105"
          >
            🔴 Start Recording
          </button>
        )}
        {isRecording && (
          <button
            onClick={stopRecording}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition transform hover:scale-105"
          >
            🛑 Stop Recording
          </button>
        )}
        {showReview && (
          <button
            onClick={resetRecording}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-6 py-2 rounded-lg transition transform hover:scale-105"
          >
            🔁 Try Again
          </button>
        )}
      </div>

      {(finalTranscript || interimTranscript) && (
        <div
          ref={transcriptBoxRef}
          className="bg-white/5 backdrop-blur-sm text-white p-4 rounded-lg mb-6 max-h-48 overflow-y-auto text-left"
        >
          <p className="font-semibold text-white mb-2">📝 Transcript:</p>
          <p>
            {finalTranscript}{' '}
            <span className="text-gray-300">{interimTranscript}</span>
          </p>
        </div>
      )}

      {audioURL && (
        <div className="mt-6 space-y-4">
          <audio controls src={audioURL} className="w-full rounded-lg" />
          <a
            href={audioURL}
            download="interview_answer.webm"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            ⬇️ Download Recording
          </a>
        </div>
      )}
    </div>
  );
}

export default Recorder;
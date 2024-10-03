import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompleteTheLyrics from "./components/CompleteTheLyrics";

function App() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Router>
        <Routes>
          <Route path="/" element={<CompleteTheLyrics />} />
          <Route path="/singer/:singerId" element={<CompleteTheLyrics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

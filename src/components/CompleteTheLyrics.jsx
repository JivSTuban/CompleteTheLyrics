import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteTheLyrics = () => {
  const navigate = useNavigate();
  const [lyrics, setLyrics] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [currentSinger, setCurrentSinger] = useState("");

  const handleSingerClick = (color, singer) => {
    if (inputValue.trim() !== "") {
      setLyrics((prev) => [
        ...prev,
        { text: inputValue, color: selectedColor },
      ]);
      setInputValue("");
    }

    setSelectedColor(color);
    setCurrentSinger(singer);
    navigate(`/singer/${singer}`);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#bfbfbf",
        overflow: "hidden",
      }}
    >
      <h1 style={{ color: "#24282c" }}>Complete The Lyrics</h1>
      <div>
        <button
          onClick={() => handleSingerClick("#858e35", "singer1")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#858e35",
            height: "80px",
            width: "170px",
          }}
        >
          First Singer
        </button>
        <button
          onClick={() => handleSingerClick("#b13a40", "singer2")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#b13a40",
            height: "80px",
            width: "170px",
          }}
        >
          Second Singer
        </button>
        <button
          onClick={() => handleSingerClick("#54828a", "singer3")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#54828a",
            height: "80px",
            width: "170px",
          }}
        >
          Third Singer
        </button>
        <button
          onClick={() => handleSingerClick("#b8713c", "singer4")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#b8713c",
            height: "80px",
            width: "170px",
          }}
        >
          Fourth Singer
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter lyrics"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            marginBottom: "20px",
            width: "620px",
            padding: "10px",
            borderRadius: "10px",
          }}
        />

        <div
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            height: "300px",
            width: "600px",
            padding: "20px",
            fontSize: "18px",
            backgroundColor: "#f0f0f0",
            textAlign: "left",
            margin: "0 auto",
            overflowY: "scroll",
          }}
        >
          {lyrics.map((lyric, index) => (
            <div
              key={index}
              style={{
                backgroundColor: lyric.color,
                padding: "5px",
                marginBottom: "5px",
                borderRadius: "20px",
              }}
            >
              {lyric.text}
            </div>
          ))}

          {inputValue && (
            <div
              style={{
                backgroundColor: selectedColor || "transparent",
                padding: "5px",
                marginBottom: "5px",
                borderRadius: "20px",
              }}
            >
              {inputValue}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompleteTheLyrics;

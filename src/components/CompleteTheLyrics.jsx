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
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "#fffff)",
        overflow: "hidden",
      }}
    >
      <h1 style={{ color: "#fffff", fontSize: "2em", fontWeight: "bold" }}>
        Complete The Lyrics
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <button
          onClick={() => handleSingerClick("#6a983c", "singer1")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#6a983c",
            color: "#fff",
            height: "100px",
            width: "170px",
            borderRadius: "15px",
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s, background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#89b84f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#6a983c")}
        >
          <h3>First Singer</h3>
        </button>
        <button
          onClick={() => handleSingerClick("#b13a40", "singer2")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#b13a40",
            color: "#fff",
            height: "100px",
            width: "170px",
            borderRadius: "15px",
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s, background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c7515b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#b13a40")}
        >
          <h3>Second Singer</h3>
        </button>
        <button
          onClick={() => handleSingerClick("#54828a", "singer3")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#54828a",
            color: "#fff",
            height: "100px",
            width: "170px",
            borderRadius: "15px",
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s, background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#6b9aa3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#54828a")}
        >
          <h3>Third Singer</h3>
        </button>
        <button
          onClick={() => handleSingerClick("#b8713c", "singer4")}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#b8713c",
            color: "#fff",
            height: "100px",
            width: "170px",
            borderRadius: "15px",
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s, background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d28a56")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#b8713c")}
        >
          <h3>Fourth Singer</h3>
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter lyrics"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            marginBottom: "20px",
            width: "600px",
            padding: "15px",
            borderRadius: "15px",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "18px",
          }}
        />

        <div
          style={{
            border: "2px solid #d1e2f0",
            borderRadius: "15px",
            height: "300px",
            width: "600px",
            padding: "20px",
            fontSize: "18px",
            backgroundColor: "#fff",
            textAlign: "left",
            margin: "0 auto",
            overflowY: "scroll",
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {lyrics.map((lyric, index) => (
            <div
              key={index}
              style={{
                backgroundColor: lyric.color,
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "15px",
                color: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {lyric.text}
            </div>
          ))}

          {inputValue && (
            <div
              style={{
                backgroundColor: selectedColor || "#ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "15px",
                color: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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

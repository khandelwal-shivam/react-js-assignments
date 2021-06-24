import { useState } from "react";

import Mic from "./images/mic.jpg";
import MusicTree from "./images/music_tree.jpg";

const Content = (props) => {
  const imageGallery = [Mic, MusicTree];
  const [position, setPosition] = useState(0);

  const increment = () => {
    setPosition(position + 1);
    console.log(position);
  };

  const decrement = () => {
    setPosition(position - 1);
    console.log(position);
  };

  const imageLocation = (index) => {
    return imageGallery[Math.abs(index) % 2];
  };
  return (
    <main role="main" style={{ display: "flex", justifyContent: "center" }}>
      <button
        className="btn"
        style={{ alignSelf: "flex-end" }}
        onClick={() => {
          increment();
        }}
      >
        Next
      </button>
      <section className="main-content">
        <div className="img-container">
          <img
            src={imageLocation(position)}
            alt="music icon"
            style={{
              width: "250px",
              height: "250px",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          />
        </div>
      </section>
      <button
        className="btn"
        style={{ alignSelf: "flex-end" }}
        onClick={() => {
          decrement();
        }}
      >
        Previous
      </button>
    </main>
  );
};

export default Content;

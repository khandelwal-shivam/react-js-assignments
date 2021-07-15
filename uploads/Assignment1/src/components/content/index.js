/* Dependencies */
import { useState } from "react";

/* Images */
import Mic from "./images/mic.jpg";
import MusicTree from "./images/music_tree.jpg";

/* Styling */
import "./content.css";

const Content = (props) => {
  const imageGallery = [Mic, MusicTree];
  const [position, setPosition] = useState(0);

  const increment = () => {
    /* Increase position count by 1 */
    setPosition((currposition) => {
      return currposition + 1;
    });
  };

  const decrement = () => {
    /* Decrease position count by 1 */
    setPosition((currposition) => {
      return currposition - 1;
    });
  };

  const imageLocation = (index) => {
    /* Returns 0 or 1 as value based on even or odd position count 
    Ex.  Input    -4 -3 -2 -1  0 1  2  3  4
         Output    0  1  0  1  0 1  1  0  1
    */
    return imageGallery[Math.abs(index) % 2];
  };

  return (
    <main role="main">
      <section className="main-content">
        <div className="img-container">
          <img src={imageLocation(position)} alt="music icon" />
        </div>
        <div className="btn-container">
          <button
            className="btn btn-increment btn-counter"
            onClick={() => {
              increment();
            }}
          >
            Next
          </button>
          <button
            className="btn btn-decrement btn-counter"
            onClick={() => {
              decrement();
            }}
          >
            Previous
          </button>
        </div>
        <div className="result">{position}</div>
      </section>
    </main>
  );
};

export default Content;

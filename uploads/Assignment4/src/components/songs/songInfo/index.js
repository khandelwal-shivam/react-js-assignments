import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import "./songInfo.css";

const SongInfo = (props) => {
  const history = useHistory();
  let { id } = useParams();
  const [song, setSong] = useState({});

  const fetchSongs = async (id) => {
    console.log("id: ", id);
    const response = await fetch(`http://localhost:30001/songlist/${id}`);
    const data = await response.json();
    setSong(data);
  };

  useEffect(() => {
    fetchSongs(id);
  }, []);

  return (
    <Fragment>
      <section className="song-detail">
        <div className="song-info">
          <table>
            <thead>
              <tr>
                <th>Song Id</th>
                <th>Movie</th>
                <th>Song Title</th>
                <th>Song Length</th>
                <th>Singer</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{song["id"]}</td>
                <td>{song["movie"]}</td>
                <td>{song["title"]}</td>
                <td>{song["length"]}</td>
                <td>{song["singer"]}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn back-btn"
            onClick={() => {
              history.push("/songs");
            }}
          >
            Back
          </button>
        </div>
      </section>
    </Fragment>
  );
};
export default SongInfo;

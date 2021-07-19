import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./songlist.css";

const SongList = (props) => {
  const history = useHistory();

  const [songData, setSongData] = useState([]);

  const fetchSongs = async () => {
    const response = await fetch(`http://localhost:30001/songlist`);
    const data = await response.json();
    setSongData(data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const ViewSong = (id) => {
    let resp = window.confirm(
      "Are you sure that you want to view the details?"
    );
    if (resp) {
      history.push(`/songs/${id}`);
    }
  };

  return (
    <section className="song-list">
      <h2>Songs List</h2>
      <table className="playlist">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Title</th>
            <th>Song Length</th>
            <th>Singer</th>
          </tr>
        </thead>
        <tbody>
          {songData.map((element, index) => {
            return (
              <tr key={index}>
                <td
                  onClick={() => {
                    ViewSong(element.id);
                  }}
                >
                  {element.movie}
                </td>
                <td>{element.title}</td>
                <td>{element.length}</td>
                <td>{element.singer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-section">
        <button
          className="btn"
          id="add-btn"
          onClick={() => {
            history.push("/songs/addsong");
          }}
        >
          Add Song
        </button>
      </div>
    </section>
  );
};

export default SongList;

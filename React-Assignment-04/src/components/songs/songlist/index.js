import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./songlist.css";

const SongList = (props) => {
  const history = useHistory();

  const [songData, setSongData] = useState([]);

  const fetchSongs = async () => {
    const response = await fetch(`http://localhost:4000/songlist`);
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
      <h4>Songs List</h4>
      <table className="playlist">
        <thead>
          <tr>
            <th>Song Id</th>
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
                  {element.id}
                </td>
                <td>{element.movie}</td>
                <td>{element.title}</td>
                <td>{element.length}</td>
                <td>{element.singer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn add-btn"
        onClick={() => {
          history.push("/songs/addsong");
        }}
      >
        Add Song
      </button>
    </section>
  );
};

export default SongList;

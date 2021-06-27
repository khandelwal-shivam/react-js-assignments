import { useState, useEffect } from "react";

const SongList = (props) => {
  const [songData, setSongData] = useState([]);
  const fetchSongs = async () => {
    const response = await fetch("http://localhost:30001/songs");
    const data = await response.json();
    setSongData(data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <section className="song-list">
      <h4>Songs List</h4>
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
                <td>{element.movie}</td>
                <td>{element.title}</td>
                <td>{element.length}</td>
                <td>{element.singer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
export default SongList;

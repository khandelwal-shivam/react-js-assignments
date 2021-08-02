import "./songlist.css";
import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchSongs } from "../../../Redux/Actions";
import { useHistory } from "react-router-dom";
const SongList = () => {
  // const [songData, setSongData] = useState([]);
  const songData =  useSelector(state=>state.songs.songList);
  const dispatch = useDispatch();
  const history = useHistory();
  // const fetchSongs = async () => {
  //   const response = await fetch("http://localhost:30001/songs");
  //   const data = await response.json();
  //   setSongData(data);
  // };

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <section className="song-list">
      <h2>Song List</h2>
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
          {songData && songData.map((element, index) => {
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
      <button className = "addSong"
       onClick = {()=>{history.push('/songs/addsong')}}
      >Add Songs</button>
    </section>
  );
};
export default SongList;

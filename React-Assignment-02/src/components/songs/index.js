import { Fragment, useState } from "react";
import "./main.css";

import SongList from "./songlist";
import { SongData, SongTemplate } from "./songdata";

const AllSongs = (props) => {
  const [songCount, setSongCount] = useState(SongData.length);
  var song = SongTemplate;

  const AddSong = (info) => {
    var data = {};
    var i = 0;
    for (const [key, value] of Object.entries(song)) {
      data[key] = info[i++].value;
    }
    console.log(data);
    song = data;
    SongData.push(song);
    setSongCount(songCount + 1);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    AddSong(event.target);
    console.log("New Song Added to PlayList");
    return false;
  };

  return (
    <Fragment>
      <section className="info">
        <h2>Display Song Info using in memory JSON</h2>
        <h4>No. of songs in the playlist : {songCount}</h4>
        <hr />
      </section>
      <SongList />
      <section className="song-form txt-blue">
        <form onSubmit={onFormSubmit}>
          <div className="input-group">
            <input type="text" id="movie" required />
            <label htmlFor="movie">Movie Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="title" required />
            <label htmlFor="title">Song Title</label>
          </div>
          <div className="input-group">
            <input type="text" id="length" required />
            <label htmlFor="length">Song Length</label>
          </div>
          <div className="input-group">
            <input type="text" id="singer" required />
            <label htmlFor="singer">Singer</label>
          </div>
          <button className="btn txt-blue">Add Song</button>
        </form>
      </section>
    </Fragment>
  );
};
export default AllSongs;

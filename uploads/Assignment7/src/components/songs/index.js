/* eslint-disable no-lone-blocks */
import { Fragment, useState } from "react";
import "./songs.css";

import SongList from "./songlist";
import { SongData, SongTemplate } from "./songdata";

const AllSongs = (props) => {
  const [songCount, setSongCount] = useState(SongData.length);
  var song = SongTemplate;

  const AddSong = (info) => {
    var data = {};
    var i = 0;
    for (const [key] of Object.entries(song)) {
      data[key] = info[i++].value;
    }
    console.log(data);
    song = data;
    SongData.push(song);
    setSongCount(songCount + 1);
  };

  {
    /* 
  const onFormSubmit = (event) => {
    event.preventDefault();
    AddSong(event.target);
    console.log("New Song Added to PlayList");
    return false;
  };

  */
  }
  return (
    <Fragment>
      <section className="info">
        <h2>Display Song Info using in memory JSON</h2>
        <h4 className="txt-center">
          No. of songs in the playlist : {songCount}
        </h4>
        <hr />
      </section>
      <SongList data={SongData} />
      {/*
        <section>
        <form className="song-form" onSubmit={onFormSubmit}>
          <h1 className="mb-1">Song Form</h1>
          <div className="input-group">
            <label htmlFor="movie">Movie Name</label>
            <input type="text" id="movie" required />
          </div>
          <div className="input-group">
            <label htmlFor="title">Song Title</label>
            <input type="text" id="title" required />
          </div>
          <div className="input-group">
            <label htmlFor="length">Song Length</label>
            <input type="text" id="length" required />
          </div>
          <div className="input-group">
            <label htmlFor="singer">Singer</label>
            <input type="text" id="singer" required />
          </div>
          <button className="btn" id="btn-addSong">
            Add Song
          </button>
        </form>
      </section>
        */}
    </Fragment>
  );
};
export default AllSongs;

import { Switch, Route } from "react-router-dom";

import "./main.css";

import SongList from "./songlist";
import SongForm from "./songform";
import SongInfo from "./songInfo";

const AllSongs = (props) => {
  return (
    <Switch>
      <Route exact path="/songs" component={SongList} />
      <Route exact path="/songs/addsong" component={SongForm} />
      <Route path="/songs/:id" component={SongInfo} />
    </Switch>
  );
};
export default AllSongs;

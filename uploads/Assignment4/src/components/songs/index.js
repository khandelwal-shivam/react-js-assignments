import { Switch, Route, useHistory } from "react-router-dom";

import SongList from "./songlist";
import SongForm from "./songform";
import SongInfo from "./songInfo";
const AllSongs = (props) => {
  const history = useHistory();
  // console.log("history",history);
  return (
    <Switch>
      <Route exact path="/songs" component={SongList} />
      <Route exact path="/songs/addsong" component={SongForm} />
      <Route path="/songs/:id" component={SongInfo} />
    </Switch>
  );
};
export default AllSongs;

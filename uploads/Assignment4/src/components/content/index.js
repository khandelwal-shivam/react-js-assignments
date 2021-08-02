import "./content.css";
import { Switch, Route} from "react-router-dom";
import AllSongs from "../songs";
import About from "../about";
import {useHistory} from 'react-router-dom';
const Content = () => {
  const history = useHistory();
  console.log("history from content page", history.location.pathname);
  function promptMessage(linkName){
    if(history.location.pathname === "/songs/addsong" ){
      if(window.confirm("Are you sure you want to leave this page?")){ 
        console.log("Hell Yes!!!");
        history.push(linkName);
      }
      else {
        console.log("No we dont!!!");
      }
    }
    else{
      history.push(linkName);
    }
  }
  return (
    <main role="main">
      <section className="info">
        <h2 className="txt-center">Display Song Info from the JSON Server</h2>
        <hr />
      </section>
      <section className="menu">
        <h2>
          {/* <Link to="/">About</Link> */}
          <a href = '!#' onClick = {(e)=>{e.preventDefault();promptMessage('/')}}>About</a>
        </h2>
        <h2>
          {/* <Link to="/songs">Songs</Link> */}
          <a href = "!#" onClick = {(e)=>{e.preventDefault();promptMessage('/songs')}}>Songs</a>
        </h2>
      </section>
      <section className="route-container">
        <div className="flex">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/songs" component={AllSongs} />
          </Switch>
        </div>
      </section>
    </main>
  );
};
export default Content;

import "./content.css";
import { Switch, Route, Link } from "react-router-dom";
import AllSongs from "../songs";
import About from "../about";

const Content = (props) => {
  return (
    <main role="main">
      <section className="info">
        <h2 className="txt-center">Display Song Info from the JSON Server</h2>
        <hr />
      </section>
      <section className="menu">
        <h2>
          <Link to="/">About</Link>
        </h2>
        <h2>
          <Link to="/songs">Songs</Link>
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

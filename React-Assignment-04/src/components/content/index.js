import { Switch, Route, Link } from "react-router-dom";
import AllSongs from "../songs";
import About from "../about";

const Content = (props) => {
  return (
    <main role="main">
      <section className="info">
        <h2>Display Song Info from JSON Server</h2>
        <hr />
      </section>
      <section className="menu" style={{ display: "flex" }}>
        <h2 style={{ padding: "0 2rem " }}>
          <Link to="/">About</Link>
        </h2>
        <h2 style={{ padding: "0 2rem " }}>
          <Link to="/songs">Songs</Link>
        </h2>
      </section>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/songs" component={AllSongs} />
      </Switch>
    </main>
  );
};
export default Content;

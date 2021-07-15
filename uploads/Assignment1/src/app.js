/* Dependencies */
import { Fragment } from "react";

/* Components */
import Header from "./components/header";
import Content from "./components/content";

/* Styling */
import "./app.css";

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <Content />
    </Fragment>
  );
};

export default App;

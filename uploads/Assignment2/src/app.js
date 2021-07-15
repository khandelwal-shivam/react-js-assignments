import { Fragment } from "react";

import "./app.css";
import Header from "./components/header";
import Content from "./components/content";

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <Content />
    </Fragment>
  );
};

export default App;

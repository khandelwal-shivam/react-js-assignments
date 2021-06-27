import { Fragment } from "react";

import Header from "./components/header";
import Content from "./components/content";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;

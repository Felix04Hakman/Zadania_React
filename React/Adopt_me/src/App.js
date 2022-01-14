import React from "react";
import * as ReactDOM from "react-dom";

import { SearchParams } from "./SearchParams";
import { Title } from "./Title";

const App = () => {
  return (
    <div>
      <Title />
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

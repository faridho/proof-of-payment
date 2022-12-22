import * as React from "react";
import Proof from "./components/proof";
import List from "./components/list";
import "./style.css";

const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <Proof />
        </div>
        <div className="card__footer">
          <List />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import UserTable from "./components/table-component/table-component.component";
import AddUser from "./components/add-user-component/add-user-component.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>~Final challenge~</h1>
      <UserTable></UserTable>
      <AddUser></AddUser>
    </div>
  );
}

export default App;

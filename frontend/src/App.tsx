import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Table from  './Pages/Table'
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";

function App() {
  return <div className="App">
    <Routes>
      <Route  path="/" element={<Table />} />
      <Route path="/addUser" element={<AddUser />} />
      <Route path="/editUser/:id" element={<EditUser />} />
    </Routes>

    <Charts />

  </div>;
}

export default App;

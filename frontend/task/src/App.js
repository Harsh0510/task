import React from "react";
import { Routes, Route } from "react-router";
import GetAllUsers from "./components/GetAllUsers/GetAllUsers";
import CreateUser from "./components/CreateUser/CreateUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<GetAllUsers />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/editUser/:id' element={<UpdateUser />} />
      </Routes>
    </>
  );
}

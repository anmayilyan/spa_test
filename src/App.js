import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import UserPosts from "./components/UserPosts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="user-posts" element={<UserPosts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

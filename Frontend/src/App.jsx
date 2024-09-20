import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import CreatePost from "./components/createPost";
import AllPosts from "./components/allPosts";
import EditPost from "./components/editPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CreatePost />} />
          <Route path="/all" element={<AllPosts />} />
          <Route path="/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

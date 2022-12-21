import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "components/Posts";
import SinglePost from "components/SinglePost";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "api";
import "./App.css";

function App() {
  return (
    <ApiProvider api={api}>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Posts />} />
            <Route exact path="/posts/:id" element={<SinglePost />} />
          </Routes>
        </div>
      </Router>
    </ApiProvider>
  );
}

export default App;

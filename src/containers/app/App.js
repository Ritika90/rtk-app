import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "components/Posts";
import SinglePost from "components/SinglePost";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route exact path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

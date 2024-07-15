import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

const App: React.FC = () => {
  return (
    <PostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </PostProvider>
  );
};

export default App;

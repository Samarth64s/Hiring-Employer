import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ChatPage from "./pages/ChatPage";
import ActivitiesPage from "./pages/ActivitiesPage";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/chat" Component={ChatPage} />
            <Route path="/activities" Component={ActivitiesPage} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

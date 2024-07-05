import React from "react";
import CarsList from "./components/CarsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learn from "./components/Learn";
import Shop from "./components/Shop";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarsList />} />
        <Route path="/learn/:id" element={<Learn />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

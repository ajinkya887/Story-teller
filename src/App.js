import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stories from './pages/ Stories';
import StoryDetail from './pages/StoryDetail';
import CreateStory from './pages/CreateStory';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/create" element={<CreateStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
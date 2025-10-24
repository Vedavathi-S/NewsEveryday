
import './App.css';
import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
// import PropTypes from 'prop-types'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  const pageSize=10;
  const[progress,setProgress]= useState(0);
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color="#f11946"
        progress={progress}
        />
        {/* <News  setProgress={setProgress}pageSize={5} category="sports"/> */}
        <Routes>
          <Route exact path="/" element={<News  setProgress={setProgress} key="general" pageSize={pageSize} category="general" />} />
            <Route exact path="/business" element={<News  setProgress={setProgress} key="business" pageSize={pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News  setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/health" element={<News  setProgress={setProgress} key="health" pageSize={pageSize} category="health" />} />
            <Route exact path="/science" element={<News  setProgress={setProgress} key="science" pageSize={pageSize} category="science" />} />
            <Route exact path="/sports" element={<News  setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News  setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </Router>
      </div>
    )
  
}

export default App

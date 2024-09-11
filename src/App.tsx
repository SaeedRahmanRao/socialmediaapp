import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import {Main} from "./Pages/main";
import {Login} from "./Pages/login";
import {Navbar} from "./Components/Navbar";
import {CreatePost} from "./create-post/createpost";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState } from 'react'

import './App.css'
import {Route, Routes} from "react-router-dom";
import Loyout from "./pages/loyout.jsx";
import Look from "./pages/look.jsx";
import Post from "./pages/post.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout/>}>
          <Route path="watch" element={<Look/>}/>
          <Route path="create" element={<Post/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

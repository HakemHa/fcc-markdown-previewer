import { useState } from 'react'
import './App.css'
import Editor from "./Editor"
import Preview from './Preview'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="content">
      <Editor />
      <Preview />
      <a id="github" href="https://github.com/HakemHa" target="_blank">by HakemHa</a>
    </div>
  )
}


export default App

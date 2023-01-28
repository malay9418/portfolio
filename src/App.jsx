import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import AppBody from "./Components/AppBody"


export default function App() {
  const [mode, setMode] = useState("dark");
  return (
    <backGround className={`gradient-bg bg-${mode}`}>
      <main className="transparent-overlay">
        < Navbar mode={mode} setMode={setMode}/>
        <AppBody/>
      </main>
    </backGround>
  )
}

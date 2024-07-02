import "./App.css";
import Game from "./components/ui/Game";
import Layout from "./components/ui/layout";
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;

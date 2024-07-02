import "./App.css";
import Game from "./components/ui/Game";
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;

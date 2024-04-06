import Luck from "./Luck";
import DialogWhell from "./DialogWheel";
import McRoulette from "./CaseComponents/CaseRoulette";
import peaks from "./peaks.json";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import CasePage from "./CaseComponents/CasePage";

function App() {
  const chipCount = 150;
  const transitionDuration = 10;
  return (
    <Routes>
      <Route path="/case" element={<CasePage />} />

      <Route
        path="/luck"
        element={
          <McRoulette
            chip={peaks}
            chipCount={chipCount}
            transitionDuration={transitionDuration}
          />
        }
      />
      <Route path="/whell" element={<DialogWhell />} />
      <Route path="/" element={<Luck />} />
    </Routes>
  );
}

export default App;

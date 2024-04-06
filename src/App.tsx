import Luck from "./Luck";
import DialogWhell from "./DialogWheel";
import McRoulette from "./CaseComponents/CaseRoulette";
import peaks from "./peaks.json";
import "./index.css";
import CasePage from "./CaseComponents/CasePage";

function App() {
  const chipCount = 150;
  const transitionDuration = 10;
  return (
    <>
      {/* <Luck /> */}
      {/* <DialogWhell /> */}
      {/* <McRoulette
        chip={peaks}
        chipCount={chipCount}
        transitionDuration={transitionDuration}
      /> */}
      <CasePage />
    </>
  );
}

export default App;

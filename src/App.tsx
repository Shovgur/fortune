import Luck from "./Luck";
// import DialogWhell from "./DialogWheel";
import McRoulette from "./CaseComponents/CaseRoulette";
import peaks from "./peaks.json";
import "./index.css";

function App() {
  const weaponsCount = 150;
  const transitionDuration = 10;
  return (
    <>
      {/* <Luck /> */}
      {/* <DialogWhell /> */}
      <McRoulette
        weapons={peaks}
        weaponsCount={weaponsCount}
        transitionDuration={transitionDuration}
      />
    </>
  );
}

export default App;

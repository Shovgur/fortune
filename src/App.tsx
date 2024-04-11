import Luck from './Luck';
import DialogWheel from './DialogWheel';
import McRoulette from './CaseComponents/CaseRoulette';
import chips from './chips.json';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import CasePage from './CaseComponents/CasePage';

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
            chip={chips}
            chipCount={chipCount}
            transitionDuration={transitionDuration}
          />
        }
      />
      <Route path="/wheel" element={<DialogWheel />} />
      <Route path="/" element={<Luck />} />
    </Routes>
  );
}

export default App;

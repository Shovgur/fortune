import StaticWheel from './components/ui/wheel/StaticWheel';
import SpinButton from './components/ui/wheel/SpinButton';
import prizes from '../public/prizes.png';
import { useCallback, useEffect, useRef, useState } from 'react';
import WinWindow from './WinWindow';

const lots = [
  {
    title: '50 free spins',
  },
  {
    title: 'x1',
  },
  {
    title: 'x2 money',
  },
  {
    title: '100 free spins',
  },
  {
    title: 'free money',
  },
  {
    title: 'bet',
  },
  {
    title: 'x1',
  },
  {
    title: 'jackpot',
  },
  {
    title: 'x3 money',
  },
  {
    title: 'free money',
  },
  {
    title: '10 free spins',
  },
  {
    title: 'x3',
  },
];

type Unpacked<T> = T extends (infer U)[] ? U : T;

const DialogWhell = () => {
  const wheelRef = useRef<HTMLImageElement>(null);
  const [deg, setDeg] = useState(0);
  const [winner, setWinner] = useState<Unpacked<typeof lots> | null>(null);
  const [winWindowOpen, setWinWindowOpen] = useState(false);

  function spin() {
    if (!wheelRef.current) return;

    const randomItemDeg = Math.random() * 359;

    const winLotIndex = Math.floor(randomItemDeg / 30);
    console.log(`winner: ${lots[winLotIndex].title}`);
    setWinner(lots[winLotIndex]);

    // - 15 because the wheel starts rotating from the center of 50 free spins lot
    // 360 * 14 means 14 more rotations
    const deg = Math.floor(randomItemDeg - 15 + 360 * 14);
    setDeg(deg);
  }

  const openWinWindow = useCallback(() => {
    setTimeout(() => {
      setWinWindowOpen(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const wheel = wheelRef.current;
    wheel?.addEventListener('transitionend', openWinWindow);

    return () => {
      wheel?.removeEventListener('transitionend', openWinWindow);
    };
  }, [openWinWindow]);

  return winWindowOpen && winner ? (
    <WinWindow winner={winner} />
  ) : (
    <div className="bg-[url('../public/fortune_wheel_bg.png')] bg-center bg-cover py-9 w-[70vw] h-[940px] max-h-[calc(100vh-60px)] flex flex-col items-center justify-end rounded-[24px]">
      <div className="relative w-[auto] h-[80%] ">
        <img
          ref={wheelRef}
          className="w-[calc(100%-13px)] h-[calc(100%-13px)] absolute left-1/2 top-1/2 translate-x-[calc(-50%+1.5px)] -translate-y-1/2 rounded-full transition-transform duration-8000"
          src={prizes}
          width={684}
          height={684}
          style={
            deg > 0
              ? {
                  transform: `translate(calc(-50% + 1px), calc(-50%)) rotate(${deg}deg)`,
                }
              : {}
          }
          alt=""
        />
        <div className="w-full h-full relative [&>svg]:w-full [&>svg]:h-full shadow-inner">
          <StaticWheel />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[140px] h-[158px]">
            <SpinButton deg={deg} onClick={spin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogWhell;

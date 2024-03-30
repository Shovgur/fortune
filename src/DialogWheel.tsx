import StaticWheel from './components/ui/wheel/StaticWheel';
import SpinButton from './components/ui/wheel/SpinButton';
import { useRef, useState } from 'react';

const DialogWhell = () => {
  const wheelRef = useRef<HTMLImageElement>(null);
  const [deg, setDeg] = useState(0);

  function spin() {
    if (!wheelRef.current) return;

    const deg = Math.floor(Math.random() * 360 + 5000);
    setDeg(deg);
  }

  return (
    <div className="bg-[url('../public/fortune_wheel_bg.png')] bg-cover py-9 w-[1112px] h-[736px] flex flex-col items-center justify-end">
      <div className="relative w-[auto] h-[80%] ">
        <img
          ref={wheelRef}
          className="w-[calc(100%-13px)] h-[calc(100%-13px)] absolute left-1/2 top-1/2 translate-x-[calc(-50%+1.5px)] -translate-y-1/2 rounded-full transition-transform duration-8000"
          src="prizes.png"
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
            <SpinButton onClick={spin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogWhell;

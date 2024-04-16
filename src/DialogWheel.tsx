import StaticWheel from "./components/ui/wheel/StaticWheel";
import SpinButton from "./components/ui/wheel/SpinButton";
import prizes from "../public/prizes.png";
import { useCallback, useEffect, useRef, useState } from "react";
import WinWindow from "./WinWindow";
import Button from "./Button";
import bg_for_button from "../public/Item/bg_for_button_whell.png";
import bg_subscribe from "../public/Item/Button/subscribe_bg_purple.png";

const lots = [
  {
    title: "50 free spins",
  },
  {
    title: "x1",
  },
  {
    title: "x2 money",
  },
  {
    title: "100 free spins",
  },
  {
    title: "free money",
  },
  {
    title: "bet",
  },
  {
    title: "x1",
  },
  {
    title: "jackpot",
  },
  {
    title: "x3 money",
  },
  {
    title: "free money",
  },
  {
    title: "10 free spins",
  },
  {
    title: "x3",
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
    wheel?.addEventListener("transitionend", openWinWindow);

    return () => {
      wheel?.removeEventListener("transitionend", openWinWindow);
    };
  }, [openWinWindow]);

  return winWindowOpen && winner ? (
    <WinWindow winner={{ title: winner.title }} />
  ) : (
    <div className="bg-[url('../public/fortune_wheel_bg.png')] bg-center bg-cover py-9 w-full h-screen lg:w-[70vw] lg:h-[940px] lg:max-h-[calc(100vh-60px)] max-h-screen flex flex-col items-center justify-end lg:rounded-[24px]">
      <div className="lg:flex w-full pt-9 hidden pl-9">
        <div
          style={{ backgroundImage: `url(${bg_for_button})` }}
          className="lg:flex flex-col hidden text-center z-50 bg-cover 2xl:h-[194px] 2xl:w-[369px] sm:h-[137px] sm:w-[273px] items-center justify-center 2xl:py-6"
        >
          <p className="text-[20px] font-semibold 2xl:leading-8 xl:leading-6 sm:text-[16px] sm:leading-5 text-white">
            Get Free Spins
          </p>
          <span className="2xl:text-[16px] xl:text-[12px] sm:text-[10px] text-[#B5CEE2]">
            Subscribe to get 10 free cases every day
          </span>
          <Button
            size="2xl:w-[280px] 2xl:h-[68px] xl:w-[214px] xl:h-[52px] sm:w-[164px] sm:h-[40px] aspect-[372/82] max-w-none"
            className="2xl:pt-[23px] 2xl:text-[20px] sm:pt-4 sm:text-[12px]"
            imgSrc={bg_subscribe}
            text="Subscribe"
            to="/"
          />
        </div>
      </div>
      <div className="relative w-[auto] h-auto lg:h-[80%] max-h-[358px] lg:max-h-none ">
        <img
          ref={wheelRef}
          className="w-[calc(100%-13px)] h-[calc(100%-13px)]  absolute left-1/2 top-1/2 translate-x-[calc(-50%+1.5px)] -translate-y-1/2 rounded-full transition-transform duration-8000"
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
          <div className="relative w-[100px] h-[100px] lg:w-[140px] lg:h-[158px]">
            <SpinButton deg={deg} onClick={spin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogWhell;

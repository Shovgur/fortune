import { useRef, useState } from "react";
import RouletteItem from "./CaseRouletteItem";
import { Roulette, weaponAttributes } from "../../roulette.clases";
import RouletteControls from "./RouletteControls";
import free_prizes from "../../public/free_prizes.png";
import { Link } from "react-router-dom";
import back_button from "../../public/Item/Button/back_button.png";
import close_button from "../../public/Item/Button/close_button.png";
import IconsGroup from "@/components/ui/IconsGroup";

interface RouletteElementParams {
  chip: weaponAttributes[];
  chipCount: number;
  transitionDuration: number;
}

const McRoulette = ({
  chip,
  chipCount,
  transitionDuration,
}: RouletteElementParams) => {
  const [roulettechip, setRoulettechip] = useState<weaponAttributes[]>(chip);
  const [weaponPrizeId, setWeaponPrizeId] = useState<number>(-1);
  const [isReplay, setIsReplay] = useState<boolean>(false);
  const [isSpin, setIsSpin] = useState<boolean>(false);
  const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false);
  const [winHistory, setWinHistory] = useState<weaponAttributes[]>([]);

  const rouletteContainerRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  function transitionEndHandler() {
    setWinHistory(winHistory.concat(roulettechip[weaponPrizeId]));
    setIsSpin(false);
    setIsSpinEnd(true);
  }

  function prepare() {
    chipRef.current!.style.transition = "none";
    chipRef.current!.style.left = "0px";
  }

  function load() {
    const winner = chip[Math.floor(Math.random() * chip.length)];

    const roulette = new Roulette({
      winner,
      chip,
      rouletteContainerRef,
      chipRef,
      chipCount: chipCount,
      transitionDuration: transitionDuration,
    });

    roulette.set_chip();
    setRoulettechip(roulette.chip);

    return roulette;
  }

  function play() {
    if (isReplay) {
      prepare();
    }
    setIsSpin(true);

    const roulette = load();

    setTimeout(() => {
      setIsSpin(true);
      setWeaponPrizeId(roulette.spin());
      setIsReplay(true);
    }, 1000);
  }

  return (
    <div className="lg:w-[1112px] lg:pt-12 lg:h-[736px] 2xl:w-[1478px] 2xl:h-[941px] flex items-center justify-between lg:my-9 flex-col bg-none lg:bg-[url('../public/case_roulette_bg.png')] bg-cover ">
      <div className=" max-h-8 flex justify-between w-full 2xl:px-6">
        <Link className="flex items-start justify-start max-h-8" to="/case">
          <img
            className="2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 sm:w-10 sm:h-10 w-8 h-8"
            src={back_button}
            alt="back_button"
          />
        </Link>
        <Link
          className="lg:flex hidden items-start justify-start max-h-8"
          to="/case"
        >
          <img
            className="2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 sm:w-10 sm:h-10"
            src={close_button}
            alt="close_button"
          />
        </Link>
      </div>

      <div className=" flex items-start justify-between w-full px-6 lg:px-[100px]">
        <div className="flex flex-col gap-8">
          <div className=" text-3xl text-white">
            <p>Champion Case</p>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-3 pr-[26px] border-r border-opacity-70 border-[#3F305B]">
              <p className="text-[#897DAA]">Opened:</p>
              <p className="text-white">200 351</p>
            </div>
            <div className="flex flex-col gap-3 px-4  lg:px-[26px] border-r border-opacity-70 border-[#3F305B]">
              <div className="flex flex-col gap-3">
                <p className="text-[#897DAA]">Top win:</p>
                <p className="text-white">536 259 $</p>
              </div>
            </div>
            <div className="flex flex-col pl-4 lg:pl-[26px]">
              <p className="text-[#897DAA]">Prize type:</p>
              <IconsGroup />
            </div>
          </div>
        </div>
        <img
          className="lg:w-[271px] lg:h-[204px] hidden lg:block"
          src={free_prizes}
          alt="free_prize"
        />
      </div>
      <div className="w-full overflow-hidden relative bg-[#343b61] bg-opacity-30 mt-14 py-3">
        <div className="z-[1100] absolute top-0 left-1/2 h-full w-[3px] bg-[#f74e7f]"></div>
        <div
          ref={chipRef}
          className="left-0 relative flex items-center  h-full whitespace-nowrap"
          onTransitionEnd={transitionEndHandler}
        >
          {roulettechip.map((_, i) => {
            return (
              <RouletteItem
                key={i}
                id={i}
                isLoser={i !== weaponPrizeId && !isSpin && isSpinEnd}
              />
            );
          })}
        </div>
      </div>
      <RouletteControls onSpin={play} disabled={isSpin} />
    </div>
  );
};

export default McRoulette;

import React from "react";
import cl from "./roulette.module.scss";
import back_arrow from "../../public/icons/back_arrow.png";
import setting_icon from "../../public/icons/setting_button.png";
import info from "../../public/icons/info_button.png";
import spinner from "../../public/icons/spinner_refresh.png";
import spin from "../../public/icons/spin_case.png";
import desktopBg from "../../public/controls_case_background.png";
import mobileBg from "../../public/controls_bg_mob.png";

interface RouletteControlsProps {
  onSpin: () => void;
  disabled: boolean;
}

const RouletteControls: React.FC<RouletteControlsProps> = ({
  onSpin,
  disabled,
}) => {
  const backgroundImg = window.innerWidth <= 768 ? mobileBg : desktopBg;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="lg:w-[828px] w-[390px] lg:mt-[82px] relative bg-cover h-[123px] lg:h-[200px]"
    >
      <div className="absolute left-7 top-[60%] lg:top-1/2 -translate-y-1/2 lg:left-[90px] flex gap-4 lg:gap-6">
        <button className=" w-[40px] h-[40px] lg:w-[52px]  lg:h-[52px] lg:block hidden">
          <img src={back_arrow} alt="back_arrow" />
        </button>
        <button className=" w-[40px] h-[40px] lg:w-[52px] lg:h-[52px]">
          <img src={setting_icon} alt="setting_icon" />
        </button>
        <button className=" w-[40px] h-[40px] lg:w-[52px] lg:h-[52px]">
          <img src={info} alt="info_icon" />
        </button>
      </div>
      <div className="absolute top-[60%] lg:top-1/2 -translate-y-1/2 lg:right-[90px] right-7 flex gap-6">
        <button className=" w-[40px] h-[40px] lg:w-[52px] lg:h-[52px]">
          <img src={spinner} alt="info_icon" />
        </button>
      </div>
      <button className={cl.button} disabled={disabled} onClick={onSpin}>
        <img
          className=" w-[80px] h-[80px] lg:w-[102px] lg:h-[102px]"
          src={spin}
          alt="Spin"
        />
      </button>
    </div>
  );
};

export default RouletteControls;

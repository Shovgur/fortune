import React from "react";
import cl from "./roulette.module.scss";
import back_arrow from "../../public/icons/back_arrow.png";
import setting_icon from "../../public/icons/setting_button.png";
import info from "../../public/icons/info_button.png";
import spinner from "../../public/icons/spinner_refresh.png";
import spin from "../../public/icons/spin_case.png";
import controls_bg from "../../public/controls_case_background.png";

interface RouletteControlsProps {
  onSpin: () => void;
  disabled: boolean;
}

const RouletteControls: React.FC<RouletteControlsProps> = ({
  onSpin,
  disabled,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${controls_bg})` }}
      className="lg:w-[828px] w-[390px] lg:mt-[82px] relative bg-cover h-[123px] lg:h-[200px]"
    >
      <div className="absolute top-1/2 -translate-y-1/2 lg:left-[90px] flex gap-4 lg:gap-6">
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
      <div className="absolute top-1/2 -translate-y-1/2 lg:right-[90px] flex gap-6">
        <button className=" w-[40px] h-[40px] lg:w-[52px]   lg:h-[52px]">
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

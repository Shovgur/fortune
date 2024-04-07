import React from "react";
import cl from "./roulette.module.scss";
import back_arrow from "../../public/icons/back_arrow.svg"
import setting_icon from "../../public/icons/setting_icon.svg"
import info from "../../public/icons/info.svg"
import spinner from "../../public/icons/spinner-refresh.svg"
import spin from "../../public/spin_case.svg"

interface RouletteControlsProps {
  onSpin: () => void;
  disabled: boolean;
}

const RouletteControls: React.FC<RouletteControlsProps> = ({
  onSpin,
  disabled,
}) => {
  return (
    <div className="w-[828px] lg:mt-[82px] bg-[url('../../public/controls_case_background.png')] relative bg-cover h-[200px]">
      <div className="absolute top-1/2 -translate-y-1/2 lg:left-[90px] flex gap-6">
        <button className="border rounded-[20px] p-3">
          <img src={back_arrow} alt="back_arrow" />
        </button>
        <button className="border rounded-[20px] p-3">
          <img src={setting_icon} alt="setting_icon" />
        </button>
        <button className="border rounded-[20px] p-3">
          <img src={info} alt="info_icon" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 lg:right-[90px] flex gap-6">
        <button className="border rounded-[20px] p-3">
          <img src={spinner} alt="info_icon" />
        </button>
      </div>
      <button className={cl.button} disabled={disabled} onClick={onSpin}>
        <img src={spin} alt="Spin" />
      </button>
    </div>
  );
};

export default RouletteControls;

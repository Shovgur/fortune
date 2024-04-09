import dollar_icon from "../../../public/icons/dollar_icon.svg";
import arrow_up from "../../../public/icons/arrow_up.svg";
import box_icon from "../../../public/icons/box_icon.svg";
import girl_icon from "../../../public/icons/girl_icon.svg";

const IconsGroup = () => {
  return (
    <div className="flex gap-1 lg:gap-2 lg:pt-4">
      <img
        className="2xl:w-12 2xl:h-12 md:w-7 md:h-7 w-8 h-8"
        src={dollar_icon}
        alt="dollar_icon"
      />
      <img
        className="2xl:w-12 2xl:h-12 md:w-7 md:h-7 w-8 h-8"
        src={arrow_up}
        alt="arrow_up_icon"
      />
      <img
        className="2xl:w-12 2xl:h-12 md:w-7 md:h-7 w-8 h-8"
        src={box_icon}
        alt="box_icon"
      />
      <img
        className="2xl:w-12 2xl:h-12 md:w-7 md:h-7 w-8 h-8"
        src={girl_icon}
        alt="girl_icon"
      />
    </div>
  );
};

export default IconsGroup;

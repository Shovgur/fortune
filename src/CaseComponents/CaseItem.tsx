import React from "react";
import { Link } from "react-router-dom";
import case_1 from "../../public/Item/Cases/сase_champion.png";
import case_2 from "../../public/Item/Cases/case_diamond.png";
import case_3 from "../../public/Item/Cases/case_wheel.png";
import case_bg from "../../public/Item/case_bg_1.png";
import case_4 from "../../public/Item/Cases/case_lucky.png";
import button_bg from "../../public/Item/Button/buy_case_button.png";
import dollar_icon from "../../public/icons/dollar_icon.svg";
import arrow_up from "../../public/icons/arrow_up.svg";
import box_icon from "../../public/icons/box_icon.svg";
import girl_icon from "../../public/icons/girl_icon.svg";

interface CaseItemProps {
  opened: string;
  price: string;
  image: string;
  caseName: string;
}

const CaseItem: React.FC<CaseItemProps> = ({
  opened,
  price,
  image,
  caseName,
}) => {
  let linkTo = "/luck";
  if (caseName === "Money Wheel Case") {
    linkTo = "/whell";
  }

  let caseImage;
  switch (image) {
    case "case_champion":
      caseImage = case_1;
      break;
    case "case_diamond":
      caseImage = case_2;
      break;
    case "case_wheel":
      caseImage = case_3;
      break;
    case "case_lucky":
      caseImage = case_4;
      break;
    default:
      caseImage = case_2;
  }

  return (
    <div
      style={{ backgroundImage: `url(${case_bg})` }}
      className={` 2xl:w-[288px] lg:w-[165px] w-[358px] h-[182px] lg:h-[280px] 2xl:h-[486px] bg-cover`}
    >
      <div className="flex flex-col 2xl:px-4 2xl:pt-6 lg:pt-4 lg:px-3">
        <div className="text-white flex justify-between lg:text-[10px] 2xl:text-[16px]">
          <p>Opened:</p>
          <p>{opened}</p>
        </div>
        <img
          className="lg:w-[141px] lg:h-[100px] w-[181px] h-[124px] 2xl:w-[256px] 2xl:h-[175px]"
          src={caseImage}
          alt={`${image}_case`}
        />
        <div className="flex flex-col text-white">
          <p className="2xl:text-[20px] lg:text-[12px]">{caseName}</p>
          <p className="text-opacity-50 text-white 2xl:text-[16px] lg:text-[10px]">
            The case contains:
          </p>
        </div>
        <div className="flex gap-2 pt-4">
          <img
            className="2xl:w-12 2xl:h-12 md:w-7 md:h-7"
            src={dollar_icon}
            alt="dollar_icon"
          />
          <img
            className="2xl:w-12 2xl:h-12 md:w-7 md:h-7"
            src={arrow_up}
            alt="arrow_up_icon"
          />
          <img
            className="2xl:w-12 2xl:h-12 md:w-7 md:h-7"
            src={box_icon}
            alt="box_icon"
          />
          <img
            className="2xl:w-12 2xl:h-12 md:w-7 md:h-7"
            src={girl_icon}
            alt="girl_icon"
          />
        </div>
        <Link
          style={{ backgroundImage: `url(${button_bg})` }}
          to={linkTo}
          className="2xl:text-[20px] lg:text-[12px] 2xl:mt-12 text-white lg:mt-[15px] bg-cover lg:pt-[7px] flex items-center justify-center lg:pb-[6px] lg:px-8 2xl:px-3 2xl:pt-[10px] 2xl:pb-4"
        >
          {price}
        </Link>
      </div>
    </div>
  );
};

export default CaseItem;

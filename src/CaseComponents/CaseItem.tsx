import React from "react";
import { Link } from "react-router-dom";
import case_1 from "../../public/Item/Cases/сase_champion.png";
import case_2 from "../../public/Item/Cases/case_diamond.png";
import case_3 from "../../public/Item/Cases/case_wheel.png";
import case_bg from "../../public/Item/case_bg_1.png";
import case_4 from "../../public/Item/Cases/case_lucky.png";
import button_bg from "../../public/Item/Button/buy_case_button.png";
import case_1_mob from "../../public/Item/Cases/MobileCases/case_champion_mob.png";
import case_2_mob from "../../public/Item/Cases/MobileCases/case_diamond_mob.png";
import case_3_mob from "../../public/Item/Cases/MobileCases/case_lucky_mob.png";
import case_4_mob from "../../public/Item/Cases/MobileCases/case_whell_mob.png";
import IconsGroup from "@/components/ui/IconsGroup";

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

  let mobileBackground;
  switch (image) {
    case "case_champion":
      mobileBackground = case_1_mob;
      break;
    case "case_diamond":
      mobileBackground = case_2_mob;
      break;
    case "case_lucky":
      mobileBackground = case_3_mob;
      break;
    case "case_wheel":
      mobileBackground = case_4_mob;
      break;
    default:
      mobileBackground = case_2_mob;
  }

  const isMobile = window.innerWidth <= 1024;

  return (
    <div
      style={{
        backgroundImage: `url(${isMobile ? mobileBackground : case_bg})`,
      }}
      className={` 2xl:w-[288px] lg:w-[165px] w-[358px] bg-center h-[182px] lg:h-[280px] py-4 px-4 lg:px-0 lg:py-0 2xl:h-[486px] bg-cover`}
    >
      <div className=" lg:flex-col flex gap-5 lg:gap-0">
        <div className="flex flex-col 2xl:px-4 2xl:pt-6 lg:pt-4 lg:px-3">
          <div className="text-white hidden lg:flex justify-between lg:text-[10px] 2xl:text-[16px]">
            <p>Opened:</p>
            <p>{opened}</p>
          </div>

          <img
            className="lg:w-[141px] lg:h-[100px] w-[181px] h-[124px] 2xl:w-[256px] 2xl:h-[175px]"
            src={caseImage}
            alt={`${image}_case`}
          />
          <div className="lg:flex flex-col  text-white">
            <p className="2xl:text-[20px] lg:text-[12px] pl-4 lg:pl-0">
              {caseName}
            </p>
            <p className="text-opacity-50 hidden lg:block text-white 2xl:text-[16px] lg:text-[10px]">
              The case contains:
            </p>
          </div>
          <div className="hidden lg:flex">
            <IconsGroup />
          </div>
          <div className="flex justify-center">
            <Link
              style={{ backgroundImage: `url(${button_bg})` }}
              to={linkTo}
              className="2xl:text-[20px] hidden lg:text-[12px] 2xl:mt-12 text-white max-w-[190px] max-h-[42px] lg:h-full lg:w-full lg:mt-[15px] bg-cover lg:pt-[7px] lg:flex items-center justify-center lg:pb-[6px] lg:px-8 2xl:px-3 2xl:pt-[10px] 2xl:pb-4"
            >
              {price}
            </Link>
          </div>
        </div>

        <div className="lg:hidden flex flex-col">
          <div className="text-white flex justify-between  pt-4 lg:pt-0 lg:text-[10px] 2xl:text-[16px] gap-2 text-[14px]">
            <p>Opened:</p>
            <p>{opened}</p>
          </div>
          <IconsGroup />
          <Link
            style={{ backgroundImage: `url(${button_bg})` }}
            to={linkTo}
            className="2xl:text-[20px] lg:text-[12px] 2xl:mt-12 mt-8 bg-center h-[26px] w-[119px] text-white lg:mt-[15px] bg-cover lg:pt-[7px] flex items-center justify-center lg:pb-[6px] lg:px-8 2xl:px-3 2xl:pt-[10px] 2xl:pb-4"
          >
            {price}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseItem;

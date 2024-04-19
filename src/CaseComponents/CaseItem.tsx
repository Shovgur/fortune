import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import case_1 from "../animated/animated_data/case_animated_bg/Green/case.json";
import case_2 from "../animated/animated_data/case_animated_bg/Blue/case.json";
import case_3 from "../animated/animated_data/case_animated_bg/Red/case.json";
import case_4 from "../animated/animated_data/case_animated_bg/Yellow/case.json";
import case_1_bg from "../../public/Item/Cases/case_1_bg.png";
import case_2_bg from "../../public/Item/Cases/case_2_bg.png";
import case_3_bg from "../../public/Item/Cases/case_3_bg.png";
import case_4_bg from "../../public/Item/Cases/case_4_bg.png";
import case_bg from "../../public/Item/case_bg_1.png";
import button_bg from "../../public/Item/Button/buy_case_button.png";
import IconsGroup from "@/components/ui/IconsGroup";
import case_bg_mob_blue from "../animated/animated_data/case_animated_bg/Blue/bg.json";
import case_bg_mob_green from "../animated/animated_data/case_animated_bg/Green/bg.json";
import case_bg_mob_red from "../animated/animated_data/case_animated_bg/Red/bg.json";
import case_bg_mob_yellow from "../animated/animated_data/case_animated_bg/Yellow/bg.json";

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
    linkTo = "/wheel";
  }

  let caseImage;
  switch (image) {
    case "case_champion":
      caseImage = (
        <Lottie className="absolute pt-4 lg:pl-0 pl-4" animationData={case_1} />
      );
      break;
    case "case_diamond":
      caseImage = <Lottie animationData={case_2} />;
      break;
    case "case_wheel":
      caseImage = <Lottie animationData={case_3} />;
      break;
    case "case_lucky":
      caseImage = <Lottie animationData={case_4} />;
      break;
    default:
      caseImage = <Lottie animationData={case_1} />;
  }

  const isMobile = window.innerWidth <= 1024;

  let mobileBackground = isMobile ? (
    <Lottie animationData={case_bg_mob_green} />
  ) : null;
  switch (image) {
    case "case_champion":
      mobileBackground = (
        <Lottie className="absolute" animationData={case_bg_mob_green} />
      );
      break;
    case "case_diamond":
      mobileBackground = (
        <Lottie className="absolute" animationData={case_bg_mob_blue} />
      );
      break;
    case "case_lucky":
      mobileBackground = (
        <Lottie className="absolute" animationData={case_bg_mob_yellow} />
      );
      break;
    case "case_wheel":
      mobileBackground = (
        <Lottie className="absolute" animationData={case_bg_mob_red} />
      );
      break;
    default:
      mobileBackground = null;
  }

  let desktopBackground;
  switch (image) {
    case "case_champion":
      desktopBackground = case_1_bg;
      break;
    case "case_diamond":
      desktopBackground = case_2_bg;
      break;
    case "case_wheel":
      desktopBackground = case_3_bg;
      break;
    case "case_lucky":
      desktopBackground = case_4_bg;
      break;
    default:
      desktopBackground = case_bg;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${isMobile ? "" : desktopBackground})`,
      }}
      className={`2xl:w-[288px] relative lg:w-[165px] w-[358px] bg-center h-[182px] lg:h-[280px] py-4 px-4 lg:px-0 lg:py-0 2xl:h-[486px] bg-cover rounded-xl`}
    >
      {isMobile && mobileBackground}
      <div className=" lg:flex-col flex gap-5 lg:gap-0 relative z-20">
        <div className="flex flex-col 2xl:px-4 2xl:pt-6 lg:pt-4 lg:px-3">
          <div className="text-white hidden lg:flex justify-between lg:text-[10px] 2xl:text-[16px]">
            <p>Opened:</p>
            <p>{opened}</p>
          </div>

          <div className="lg:w-[141px] relative lg:h-[100px] w-[181px] h-[124px] 2xl:w-[256px] 2xl:h-[175px]">
            {caseImage}
          </div>
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

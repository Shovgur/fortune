import CaseItem from "./CaseItem";
import cases_bg from "../../public/bg/Cases_bg.png";
import Button from "@/Button";
import bg_subscribe from "./../../public/Item/Button/subscribe_bg_purple.png";
import bg_for_button from "../../public/Item/ bg_for_button.png";
import mobile_text from "../../public/Item/Cases/mobile_text.png";

const cases = [
  {
    opened: "200 351",
    price: "7,99$",
    image: "case_champion",
    caseName: "Champion Case",
  },
  {
    opened: "13 167",
    price: "13,99$",
    image: "case_diamond",
    caseName: "Diamond Case",
  },
  {
    opened: "45 015",
    price: "22,99$",
    image: "case_wheel",
    caseName: "Money Wheel Case",
  },
  {
    opened: "690 000",
    price: "5,99$",
    image: "case_lucky",
    caseName: "Lucky Case",
  },
];

const CasePage: React.FC = () => {
  return (
    <div className="relative bg-cover bg-[#150921] overflow-auto lg:overflow-hidden lg:bg-inherit flex flex-col items-center justify-end">
      <div className="flex flex-col z-20 gap-4 lg:gap-16 items-center h-full">
        <div className="flex justify-start items-center text-white w-full xl:pl-12 2xl:pl-16 sm:pl-9">
          <div
            style={{ backgroundImage: `url(${bg_for_button})` }}
            className="lg:flex flex-col hidden text-center z-50 bg-cover 2xl:h-[194px] 2xl:w-[369px] sm:h-[137px] sm:w-[260px] items-center justify-center 2xl:py-6"
          >
            <p className="text-[20px] font-semibold 2xl:leading-8 xl:leading-6 sm:text-[16px] sm:leading-5">
              Get Free Cases
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
        <img
          className="w-[182px] h-[94px] lg:hidden block"
          src={mobile_text}
          alt="text"
        />
        <div className="lg:flex lg:flex-row gap-3 lg:gap-6 px-0 lg:px-9 flex flex-col pb-14 lg:pb-0">
          {cases.map((caseItem, index) => (
            <CaseItem key={index} {...caseItem} />
          ))}
        </div>
      </div>
      <img
        loading="eager"
        className="absolute hidden lg:block z-10 top-1/2 -translate-y-1/2"
        src={cases_bg}
        alt=""
      />
    </div>
  );
};

export default CasePage;

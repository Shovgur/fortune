import React from "react";
import CaseItem from "./CaseItem";

const CasePage: React.FC = () => {
  const cases = [
    {
      opened: "200 351",
      price: "7,99$",
      image: "Сase_champion",
      caseName: "Champion Case",
    },
    {
      opened: "13 167",
      price: "13,99$",
      image: "Case_diamond",
      caseName: "Diamond Case",
    },
    {
      opened: "45 015",
      price: "22,99$",
      image: "Case_wheel",
      caseName: "Money Wheel Case",
    },
    {
      opened: "690 000",
      price: "5,99$",
      image: "Case_lucky",
      caseName: "Lucky Case",
    },
  ];

  return (
    <div className="relative bg-cover  flex flex-col items-center justify-end">
      <div className="flex flex-col z-20 gap-16 items-center">
        <div className="lg:flex lg:flex-row gap-6 px-9 flex flex-col">
          {cases.map((caseItem, index) => (
            <CaseItem key={index} {...caseItem} />
          ))}
        </div>
      </div>
      <img
        className="absolute z-10 top-1/2 -translate-y-1/2"
        src="../../public/Cases_bg.png"
        alt=""
      />
    </div>
  );
};

export default CasePage;

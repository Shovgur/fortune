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
      price: "13,99$$",
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
    <div className="bg-[url('../public/cases_bg.png')] bg-cover py-9 2xl:w-[1478px] 2xl:h-[941px] flex flex-col items-center justify-end">
      <div className="flex flex-col gap-16 items-center">
        <div className="flex gap-6">
          {cases.map((caseItem, index) => (
            <CaseItem key={index} {...caseItem} />
          ))}
        </div>
        <div>...</div>
      </div>
    </div>
  );
};

export default CasePage;

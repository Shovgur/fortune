import React from "react";

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
  return (
    <div className="bg-[url('../public/Item/case_bg_1.png')] 2xl:w-[288px] 2xl:h-[486px] bg-cover">
      <div className="flex flex-col 2xl:px-4 2xl:pt-6">
        <div className="text-white flex justify-between">
          <p>Opened:</p>
          <p>{opened}</p>
        </div>
        <img
          src={`../../public/item/Cases/${image}.png`}
          alt={`${image}_case`}
        />
        <div className="flex flex-col text-white">
          <p>{caseName}</p>
          <p className="text-opacity-50 text-white">The case contains:</p>
        </div>
        <div className="pt-4">Mock data</div>
        <button className="text-[20px] 2xl:mt-12 text-white bg-[url('../../public/Item/Button/buy_case_button.png')] bg-cover py-3 pt-[10px] pb-4">
          {price}
        </button>
      </div>
    </div>
  );
};

export default CaseItem;

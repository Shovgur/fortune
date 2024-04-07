import React from "react";
import { Link } from "react-router-dom";

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

  const imagePath = `../../public/item/Cases/${image}.png`;

  return (
    <div
      className={` bg-[url('../../public/Item/case_bg_1.png')] 2xl:w-[288px] lg:w-[165px] w-[358px] h-[182px] lg:h-[280px] 2xl:h-[486px] bg-cover`}
    >
      <div className="flex flex-col 2xl:px-4 2xl:pt-6 lg:pt-4 lg:px-3">
        <div className="text-white flex justify-between lg:text-[10px] 2xl:text-[16px]">
          <p>Opened:</p>
          <p>{opened}</p>
        </div>
        <img
          className="lg:w-[141px] lg:h-[100px] w-[181px] h-[124px] 2xl:w-[256px] 2xl:h-[175px]"
          src={imagePath}
          alt={`${image}_case`}
        />
        <div className="flex flex-col text-white">
          <p className="2xl:text-[20px] lg:text-[12px]">{caseName}</p>
          <p className="text-opacity-50 text-white 2xl:text-[16px] lg:text-[10px]">
            The case contains:
          </p>
        </div>
        <div className="pt-4">Mock data</div>
        <Link
          to={linkTo}
          className="2xl:text-[20px] lg:text-[12px] 2xl:mt-12 text-white bg-[url('../../public/Item/Button/buy_case_button.png')] lg:mt-[15px] bg-cover lg:pt-[7px] flex items-center justify-center lg:pb-[6px] lg:px-8 2xl:px-3 2xl:pt-[10px] 2xl:pb-4"
        >
          {price}
        </Link>
      </div>
    </div>
  );
};

export default CaseItem;

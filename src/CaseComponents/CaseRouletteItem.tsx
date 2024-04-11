import chip from "/public/chips/chip_1.png";
interface rouletteItemProps {
  id: number;
}

const RouletteItem = ({ id }: rouletteItemProps) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
    >
      <div
        className="2xl:h-[242px] 2xl:w-[222px] xl:h-[154px] xl:w-[158px] w-[196px] md:w-[134px] md:h-[154px] flex items-center justify-center relative "
        id={String(id)}
      >
        <img className="2xl:w-[152px] 2xl:h-[152px] w-[96px] h-[96px]" src={chip} alt="chip" />
      </div>
    </div>
  );
};

export default RouletteItem;

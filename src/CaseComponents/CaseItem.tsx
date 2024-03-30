interface rouletteItemProps {
  id: number;
  isLoser: boolean;
}

const RouletteItem = ({ id, isLoser }: rouletteItemProps) => {
  return (
    <div
      className={`h-full aspect-square flex  relative ${
        isLoser ? "opacity-50" : "opacity-100"
      }`}
    >
      <img src="../../public/background_item_roulette.png" alt="item" />
      <div
        className="w-full h-full flex items-center justify-center absolute"
        id={String(id)}
      >
        <img
          className="pb-[25px]"
          src="../../public/Item_perk_1.svg"
          alt="item"
        />
      </div>
    </div>
  );
};

export default RouletteItem;

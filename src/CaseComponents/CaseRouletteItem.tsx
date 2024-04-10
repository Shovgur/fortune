interface rouletteItemProps {
  id: number;
  isLoser: boolean;
}

const RouletteItem = ({ id, isLoser }: rouletteItemProps) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={isLoser ? { opacity: "0.5" } : { opacity: "1" }}
    >
      <div
        className="2xl:h-[200px] 2xl:w-[200px] xl:h-[172px] xl:w-[199px] w-[166px] h-[166px] flex items-center justify-center relative bg-[url('../public/Perk.png')] bg-cover"
        id={String(id)}
      ></div>
    </div>
  );
};

export default RouletteItem;

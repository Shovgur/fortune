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
        className="h-[200px] w-[200px] flex items-center justify-center relative bg-[url('../public/Perk.png')] bg-cover"
        id={String(id)}
      ></div>
    </div>
  );
};

export default RouletteItem;

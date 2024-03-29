import { Button } from "./components/ui/button";

const Luck = () => {
  return (
    <div className="bg-[url('../public/LuckBackground.png')] bg-cover max-w-[628px] max-h-[326px]">
      <div className="pt-14 flex flex-col items-center gap-8 ">
        <img
          className="px-[91px]"
          src="../public/Try-your_luck.png"
          alt="luck"
        />
        <p className="text-white">Get a great chance to win a valuable prize</p>
      </div>
      <Button />
    </div>
  );
};

export default Luck;

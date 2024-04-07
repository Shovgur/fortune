import Button from './Button';

const Luck = () => {
  return (
    <div className="bg-[url('../public/LuckBackground.png')] bg-cover lg:max-w-[628px] lg:h-[326px] relative">
      <div className="flex flex-col items-center">
        <div className="pt-14 flex flex-col items-center gap-8 ">
          <img
            className="px-[91px]"
            src="/public/Try-your_luck.png"
            alt="luck"
          />
          <p className="text-white">
            Get a great chance to win a valuable prize
          </p>
        </div>
        <Button />
      </div>
      <img
        className="absolute lg:top-[77px] lg:left-[-38px]"
        src="/public/Item_perk_1.svg"
        alt="perk_1"
      />
      <img
        className="absolute lg:right-[22px] lg:top-[268px]"
        src="../public/Item_perk_2.svg"
        alt="perk_2"
      />
    </div>
  );
};

export default Luck;

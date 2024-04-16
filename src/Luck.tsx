import Button from "./Button";
import your_luck from "../public/Try-your_luck.png";
import perk_1 from "../public/Item_perk_1.svg";
import perk_2 from "../public/Item_perk_2.svg";
import continue_bg from "../public/Item/Button/continue_bg.png";
import your_luck_mob from "../public/try_your_luck_mob.png";

const Luck = () => {
  return (
    <div className="lg:bg-[url('../public/LuckBackground.png')] bg-[url('../public/bg_luck_mob.png')] bg-cover w-full h-full lg:max-w-[628px] lg:h-[326px] relative">
      <div className="flex flex-col items-center">
        <div className="pt-14 flex flex-col items-center gap-8 ">
          <img
            className="px-[91px] lg:block hidden"
            src={your_luck}
            alt="luck"
          />
          <img
            className="px-[91px] lg:hidden block max-w-[316px]"
            src={your_luck_mob}
            alt="luck_mob"
          />
          <p className="text-white">
            Get a great chance to win a valuable prize
          </p>
        </div>
        <Button
          size="lg:aspect-[372/82] lg:max-w-none max-w-[342px] aspect-[150/20]"
          className="pt-12 text-[16px] lg:text-[26px] pb-12"
          to="/case"
          text="Continue"
          imgSrc={continue_bg}
        />
      </div>
      <img
        className="absolute hidden lg:block lg:top-[77px] lg:left-[-38px]"
        src={perk_1}
        alt="perk_1"
      />
      <img
        className="absolute hidden lg:block lg:right-[22px] lg:top-[268px]"
        src={perk_2}
        alt="perk_2"
      />
    </div>
  );
};

export default Luck;

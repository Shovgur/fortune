import Button from "./Button";
import continue_bg from "../public/Item/Button/continue_bg.png";
import win_window_text from "../public/Item/win_window_text.png";
import whell_prize from "/public/Item/whell_prize.png";

type Props = {
  winner: {
    title?: string;
    chip_name?: string;
    chip_value?: string;
  };
};

export default function WinWindow({ winner }: Props) {
  return (
    <div className="lg:w-[70vw] w-full h-screen lg:h-[940px] lg:max-h-[calc(100vh-60px)] lg:border-4 border-[#362746] rounded-xl">
      <img
        className="absolute h-full top-1/2 left-1/2 translate-y-[calc(-50%+110px)] -translate-x-1/2"
        src={"/win-bg-mask.png"}
        alt=""
      />
      <div className="bg-[url(../public/win-bg.png)] flex flex-col justify-center items-center bg-center bg-cover w-full lg:w-[70vw] h-screen lg:h-[940px] lg:max-h-[calc(100vh-60px)] rounded-[24px] overflow-hidden">
        <div className="relative mt-10 flex justify-center">
          <img
            className="relative w-[200px] lg:w-[316px]"
            src={whell_prize}
            alt="whell_prize"
          />
        </div>
        <div className="relative z-10 text-white text-center text-[32px] lg:text-[64px] flex flex-col items-center gap-11 font-bold uppercase">
          <img
            className="lg:max-w-[421px] max-w-[212px]"
            src={win_window_text}
            alt="win_text"
          />
          <p>{winner.title || winner.chip_name}</p>
        </div>
        <div className="flex justify-center">
          <Button
            size=" aspect-[372/82]"
            className="pt-12 lg:text-[26px] text-[16px]"
            to="/case"
            text="Continue"
            imgSrc={continue_bg}
          />
        </div>
      </div>
    </div>
  );
}

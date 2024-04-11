import Button from "./Button";
import continue_bg from "../public/Item/Button/continue_bg.png";

type Props = {
  winner: {
    title: string;
  };
};

export default function WinWindow({ winner }: Props) {
  return (
    <div className="w-[70vw] h-[940px] max-h-[calc(100vh-60px)] border-4 border-[#362746] rounded-xl">
      <img
        className="absolute top-1/2 left-1/2 translate-y-[calc(-50%+110px)] -translate-x-1/2"
        src={"/win-bg-mask.png"}
        alt=""
      />
      <div className="bg-[url(../public/win-bg.png)] flex flex-col justify-center items-center bg-center bg-cover w-[70vw] h-[940px] max-h-[calc(100vh-60px)] rounded-[24px] overflow-hidden">
        <div className="relative mt-10 flex justify-center">
          <img
            className="relative"
            width={316}
            height={316}
            src={"/public/Item/whell_prize.png"}
            alt=""
          />
        </div>
        <div className="relative z-10 text-white text-center text-[64px] flex flex-col items-center gap-11 font-bold uppercase">
          <img
            className="max-w-[421px]"
            src="../public/Item/win_window_text.png"
            alt="win_text"
          />
          <p>{winner.title}</p>
        </div>
        <div className="flex justify-center">
          <Button
            size=" aspect-[372/82] max-w-none"
            className="pt-12 text-[26px]"
            to="/case"
            text="Continue"
            imgSrc={continue_bg}
          />
        </div>
      </div>
    </div>
  );
}

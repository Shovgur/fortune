import win_window_text from "../public/Item/win_window_text.png";
import ContinuePurple from "./animated/Buttons/Continue_Purple";
import money_win from "@/animated/animated_data/win/money.json";
import Lottie from "lottie-react";

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
      <div className="bg-[url(../public/win-bg.png)] relative flex flex-col justify-center items-center bg-center bg-cover w-full lg:w-[70vw] h-screen lg:h-[940px] lg:max-h-[calc(100vh-60px)] rounded-[24px] overflow-hidden">
        <Lottie
          className=" h-[700px] w-[600px] absolute -top-[150px]"
          animationData={money_win}
        />
        <div className="relative z-10 text-white text-center text-[32px] lg:text-[64px] flex flex-col items-center gap-7 mt-[200px] font-bold uppercase">
          <img
            className="lg:max-w-[365px] max-w-[212px]"
            src={win_window_text}
            alt="win_text"
          />
          <p className="lg:text-[52px]">{winner.title || winner.chip_name}</p>
          <div className="flex justify-center">
            <ContinuePurple className="lg:text-[26px] text-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

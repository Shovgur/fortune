import Button from './Button';

type Props = {
  winner: {
    title: string;
  };
};

export default function WinWindow({ winner }: Props) {
  return (
    <div className="w-[70vw] h-[940px] max-h-[calc(100vh-60px)]">
      <div className="bg-[url(../public/win-bg.png)] bg-center bg-cover w-[70vw] h-[940px] max-h-[calc(100vh-60px)] rounded-[24px] overflow-hidden">
        <div className="relative mt-10 flex justify-center">
          <img
            className="absolute top-1/2 left-1/2 translate-y-[calc(-50%+110px)] -translate-x-1/2"
            src={'/win-bg-mask.png'}
            alt=""
          />
          <img
            className="relative"
            width={316}
            height={316}
            src={'/wheel_prize.png'}
            alt=""
          />
        </div>
        <div className="relative z-10 text-white text-center text-[64px] font-bold mb-10 uppercase">
          <p>{winner.title}</p>
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
}

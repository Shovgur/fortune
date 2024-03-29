import WheelComponent from "react-wheel-of-prizes";
const DialogWhell = () => {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner: any) => {
    console.log(winner);
  };
  return (
    <div className=" bg-[url('../public/fortune_wheel_bg.png')] bg-cover py-9 w-[1112px] h-[736px]">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner: any) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={190}
        upDuration={500}
        downDuration={600}
      />
    </div>
  );
};

export default DialogWhell;

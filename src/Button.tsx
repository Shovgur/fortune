import { Link } from "react-router-dom";
const Button = () => {
  return (
    <div className="text-center pt-12">
      <Link
        to="/case"
        className="relative flex cursor-pointer items-center justify-center text-[26px] text-white w-[368px] h-[98px]"
      >
        <div className="skewed absolute left-0  top-0 w-full h-full">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-gold p-1 rounded-[14px]" />
          <div className="bg-gradient-green rounded-[10px] py-3 px-5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[calc(100%-8px)] h-[calc(100%-8px)]" />
        </div>
        <img
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%+10px)] h-[calc(100%-16px)] aspect-[372/82] max-w-none"
          src="/btn-bg.png"
          width={380}
          height={82}
          alt=""
        />
        <span className="relative inline-block py-4 px-8 text-shadow">
          Continue
        </span>
      </Link>
    </div>
  );
};

export default Button;

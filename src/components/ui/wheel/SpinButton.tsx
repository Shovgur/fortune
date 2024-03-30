export default function SpinButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <svg
        className="w-full h-full cursor-pointer rounded-full"
        width="190"
        height="214"
        viewBox="0 0 190 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <ellipse
          cx="95"
          cy="119.934"
          rx="95"
          ry="94.0663"
          fill="url(#paint0_linear_744_9347)"
        />
        <path
          d="M128.77 45.8196C128.77 22.1193 95.2598 -0.00102997 95.2598 -0.00102997C95.2598 -0.00102997 61.75 22.1193 61.75 45.8196C61.75 54.6196 65.2805 63.0591 71.5648 69.2817C77.8491 75.5042 86.3724 79 95.2598 79C104.147 79 112.67 75.5042 118.955 69.2817C125.239 63.0591 128.77 54.6196 128.77 45.8196Z"
          fill="#FFF5D0"
        />
        <ellipse
          cx="95"
          cy="115.23"
          rx="95"
          ry="94.0663"
          fill="url(#paint1_linear_744_9347)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_744_9347"
            x1="95"
            y1="25.8672"
            x2="95"
            y2="214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDC82" />
            <stop offset="1" stopColor="#C5974A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_744_9347"
            x1="95"
            y1="21.1641"
            x2="95"
            y2="209.297"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F1CD71" />
            <stop offset="1" stopColor="#FCF5CB" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inline-block top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-6px)] uppercase font-black text-[40px] bg-[#C7984A] spin-shadow pointer-events-none">
        SPIN
      </span>
    </>
  );
}

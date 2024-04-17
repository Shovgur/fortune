import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  imgSrc?: string;
  to: string;
  className?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  imgSrc,
  to,
  className,
  size,
}) => {
  return (
    <div className={className}>
      <Link
        to={to}
        className="relative flex cursor-pointer items-center justify-center text-white"
      >
        <img className={size} src={imgSrc} width={380} height={82} alt="button_img" />
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inline-block py-4 px-8 text-shadow">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default Button;

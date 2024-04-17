import { Link } from "react-router-dom";
import animation from "../animated_data/continue_purple.json";
import Lottie from "lottie-react";

const ContinuePurple = () => {
  return (
    <Link to="/case">
      <Lottie
        className="pt-12 lg:text-[26px] text-[16px]"
        animationData={animation}
      />
    </Link>
  );
};

export default ContinuePurple;

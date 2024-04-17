import { Link } from "react-router-dom";
import animation from "../animated_data/continue_green.json";
import Lottie from "lottie-react";

const ContinueGreen = () => {
  return (
    <Link to="/case">
      <Lottie
        className="pt-12 text-[16px] lg:text-[26px] pb-12"
        animationData={animation}
      />
    </Link>
  );
};

export default ContinueGreen;

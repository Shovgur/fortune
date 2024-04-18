import { Link } from "react-router-dom";
import animation from "../animated_data/continue_purple.json";
import Lottie from "lottie-react";

const ContinuePurple = ({className}: {className: string}) => {
  return (
    <Link to="/case">
      <Lottie
        className={className}
        animationData={animation}
      />
    </Link>
  );
};

export default ContinuePurple;

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStar = ({ ratings }) => {
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (ratings >= i) {
      star.push(<FaStar key={i} className="rating-info" />);
    } else if (ratings >= i - 0.5) {
      star.push(<FaStarHalfAlt key={i} className="rating-info" />);
    } else {
      star.push(<FaRegStar key={i} className="rating-info" />);
    }
  }
  return (
    <div key={ratings} className="d-flex">
      {star}
    </div>
  );
};

export default RatingStar;

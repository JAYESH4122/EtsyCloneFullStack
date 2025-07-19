import type { PopularCardProps } from "../../types/datatypes";

const PopularCard = ({ src, alt, caption }: PopularCardProps) => {
  return (
    <div className="popular-card">
      <div className="popular-card-wrapper">
        <img src={src} alt={alt} />
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default PopularCard;

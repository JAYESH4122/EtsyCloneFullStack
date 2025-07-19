import type { GiftCardProps } from "../../types/datatypes";

const GiftCard = ({ src, alt, caption }: GiftCardProps) => {
  return (
    <div className="gift-card-list">
      <div className="gift-card-list-item">
        <div className="gift-image-container">
          <img src={src} alt={alt}></img>
        </div>
        <div className="gift-text-wrapper">
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;

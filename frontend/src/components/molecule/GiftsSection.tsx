import GiftCard from "../atom/GiftCard";
import type { GiftCategoryData, GiftCardProps } from "../../types/datatypes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GiftsSection = () => {
  const [giftCategory, setGiftCategory] = useState<GiftCategoryData | null>(
    null
  );

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections/giftCategory")
      .then((res) => setGiftCategory(res.data.content))
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, []);

  if (!giftCategory) return <div>Loading...</div>;

  return (
    <div
      className="gift-section-container"
      onClick={() => {
        navigate("/edit/giftCategory");
      }}
    >
      <div className="gift-section-wrapper">
        <div className="gift-title-wrapper">
          <h2>{giftCategory.title}</h2>
        </div>
        <div className="gift-card-container">
          <div className="gift-card-wrapper">
            {giftCategory.giftcard.map((card: GiftCardProps, index: number) => (
              <GiftCard
                key={index}
                src={card.src}
                alt={card.alt}
                caption={card.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsSection;
import GiftCard from "../atom/GiftCard";
import type {
  GiftCategoryData,
  GiftCardProps,
  SectionProps,
} from "../../types/datatypes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const GiftsSection = ({ onLoaded }: SectionProps) => {
  const [giftCategory, setGiftCategory] = useState<GiftCategoryData | null>(
    null
  );

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/giftCategory`)
      .then((res) => {
        setGiftCategory(res.data.content);
        onLoaded();
      })
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, [onLoaded]);

  if (!giftCategory) return null;

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

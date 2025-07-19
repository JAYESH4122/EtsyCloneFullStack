import PopularGiftsCard from "../atom/PopularGiftsCard";
import type {
  PopularGiftsSectionType,
  PopularGiftsCardProps,
} from "../../types/datatypes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.BACKEND_URL;

const PopularGiftsSection = () => {
  const [populargiftsSection, setPopulargiftsSection] =
    useState<PopularGiftsSectionType | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/popularGiftsSectionData`)
      .then((res) => setPopulargiftsSection(res.data.content))
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, []);

  if (!populargiftsSection) return <div>Loading...</div>;

  return (
    <>
      <div className="space-default"></div>
      <div
        className="popular-gifts-section-container"
        onClick={() => {
          navigate("/edit/popularGiftsSectionData");
        }}
      >
        <div className="popular-gifts-title-container">
          <h2>{populargiftsSection.title}</h2>
        </div>
        <div className="popular-gifts-card-grid">
          {populargiftsSection.popularGiftsCard.map(
            (card: PopularGiftsCardProps, index: number) => (
              <PopularGiftsCard
                key={index}
                productImageSrc={card.productImageSrc}
                heading={card.heading}
                ratingCount={card.ratingCount}
                rupeesign={card.rupeesign}
                price={card.price}
                offerprice={card.offerprice}
                offerpercentage={card.offerpercentage}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PopularGiftsSection;

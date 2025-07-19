import PopularCard from "../atom/PopularCard";
import type { PopularCardProps, PopularCategory } from "../../types/datatypes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PopularCategorySection = () => {
  const [popularcategory, setPopularcategory] =
    useState<PopularCategory | null>(null);

    const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections/popularcategory")
      .then((res) => setPopularcategory(res.data.content))
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, []);

  if (!popularcategory) return <div>Loading...</div>;

  return (
    <div onClick={() => {
        navigate("/edit/popularcategory");
      }}>
      <div className="hp-spacing-small"></div>
      <div className="popular-category-container">
        <div className="popular-category-wrapper">
          <h2>{popularcategory.title}</h2>
          <div className="popular-list-container">
            <div className="popular-list-wrapper">
              {popularcategory.popularCard.map(
                (card: PopularCardProps, index: number) => (
                  <PopularCard
                    key={index}
                    src={card.src}
                    alt={card.alt}
                    caption={card.caption}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategorySection;

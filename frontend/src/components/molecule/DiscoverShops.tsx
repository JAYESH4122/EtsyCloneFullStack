import ShopCard from "../atom/DiscoverShopCard";
import type { DiscoverShopsData, Shop } from "../../types/datatypes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DiscoverShops = () => {
  const [discoverShopsData, setDiscoverShopsData] =
    useState<DiscoverShopsData | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections/discoverShops")
      .then((res) => setDiscoverShopsData(res.data.content))
      .catch((error) => console.log("Error Fetching BlogData", error));
  }, []);

  if (!discoverShopsData) return <div>Loading...</div>;

  return (
    <div className="discover-shops-section" onClick={() => {
        navigate("/edit/discoverShops");
      }}>
      <div className="discover-shops-container">
        <div className="discover-shops-content">
          <p>{discoverShopsData.subtitle}</p>
          <h2>{discoverShopsData.title}</h2>
          <div className="discover-shops-btn">{discoverShopsData.ctaText}</div>
        </div>
        {discoverShopsData.shops.map((shop: Shop, index: number) => (
          <ShopCard key={index} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverShops;

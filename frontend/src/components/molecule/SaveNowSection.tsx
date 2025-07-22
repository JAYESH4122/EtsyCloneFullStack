import { useEffect, useState } from "react";
import type { SaveNowData, SectionProps } from "../../types/datatypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const SaveNowSection = ({ onLoaded }: SectionProps) => {
  const [saveNowData, setSaveNowData] = useState<SaveNowData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/saveNowSection`)
      .then((res) => {
        setSaveNowData(res.data.content);
        onLoaded();
      })
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, [onLoaded]);

  if (!saveNowData) return null;

  return (
    <div
      className="save-now-section"
      onClick={() => {
        navigate("/edit/saveNowSection");
      }}
    >
      <div className="save-now-heading">
        <h2>{saveNowData.heading}</h2>
      </div>
      <ul className="save-now-list">
        {saveNowData.items.map((item) => (
          <li key={item.id}>
            <div className="save-now-image-container">
              <img loading="lazy" src={item.imageUrl} alt={item.category} />
            </div>
            <p>{item.category}</p>
            <p>{item.discount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaveNowSection;

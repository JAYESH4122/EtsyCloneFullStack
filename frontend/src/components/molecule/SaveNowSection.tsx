import { useEffect, useState } from "react";
import type { SaveNowData } from "../../types/datatypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SaveNowSection = () => {
  const [saveNowData, setSaveNowData] = useState<SaveNowData | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections/saveNowSection")
      .then((res) => setSaveNowData(res.data.content))
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, []);

  if (!saveNowData) return <div>Loading...</div>;

  return (
    <div className="save-now-section" onClick={() => {
          navigate("/edit/saveNowSection");
        }}>
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

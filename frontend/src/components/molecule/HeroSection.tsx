import { useEffect, useState } from "react";
import type { HeroSectionData, SectionProps } from "../../types/datatypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const HeroSection = ({ onLoaded }: SectionProps) => {
  const [heroSection, setHeroSection] = useState<HeroSectionData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/heroSection`)
      .then((res) => {
        setHeroSection(res.data.content);
        onLoaded();
      })
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, [onLoaded]);

  if (!heroSection) return null;

  return (
    <div>
      <section
        className="hero-section-wrapper"
        onClick={() => {
          navigate("/edit/heroSection");
        }}
      >
        <div className="hero-section-container">
          <div className="main-hero-section">
            <div className="hero-left-section">
              <div className="left-image-wrapper">
                <div className="first-image-container">
                  <p className="title-text">{heroSection.title}</p>
                  <p className="subtitle">{heroSection.subtitle}</p>
                  <a className="shop-now-btn">{heroSection.shopNowButton}</a>
                </div>
                <div className="second-image-container">
                  <img
                    src="/hero-image-1.webp"
                    alt={heroSection.imageAlts.mainImage}
                    fetchPriority="high"
                    sizes="(max-width: 639px) 100vw, (max-width: 899px) 45vw, (max-width: 1199px) 55vw, 33vw"
                    srcSet="https://i.etsystatic.com/ij/a43ac5/6999869387/ij_680x540.6999869387_reb4ek9g.jpg?version=0 680w, https://i.etsystatic.com/ij/a43ac5/6999869387/ij_850x675.6999869387_reb4ek9g.jpg?version=0 850w, https://i.etsystatic.com/ij/a43ac5/6999869387/ij_1020x810.6999869387_reb4ek9g.jpg?version=0 1020w, https://i.etsystatic.com/ij/a43ac5/6999869387/ij_1190x945.6999869387_reb4ek9g.jpg?version=0 1190w, https://i.etsystatic.com/ij/a43ac5/6999869387/ij_1360x1080.6999869387_reb4ek9g.jpg?version=0 1360w"
                  ></img>
                </div>
              </div>
            </div>
            <div className="hero-right-section">
              <div className="right-image-grid">
                <div className="grid-wrapper">
                  <img
                    src="/hero-image-2.webp"
                    alt={heroSection.imageAlts.secondaryImage}
                    sizes="400px"
                    srcSet="https://i.etsystatic.com/10289795/r/il/40af49/1540931257/il_600x600.1540931257_gnwg.jpg 600w, https://i.etsystatic.com/10289795/r/il/40af49/1540931257/il_800x800.1540931257_gnwg.jpg 800w"
                  />
                  <div className="hero-right-bottom-content">
                    <p className="content-title">
                      {heroSection["bottom-content"].title}
                    </p>
                    <span className="content-subtitle">
                      {heroSection["bottom-content"].subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

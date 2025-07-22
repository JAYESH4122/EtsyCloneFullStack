import { useState } from "react";
import BackToSchoolSection from "./BackToSchoolSection";
import DiscoverShops from "./DiscoverShops";
import Footer from "./Footer";
import FreshBlogSection from "./FreshBlogSection";
import GiftsSection from "./GiftsSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PopularCategorySection from "./PopularCategorySection";
import QuestionnaireSection from "./QuestionareSection";
import SaveNowSection from "./SaveNowSection";
import SubFooter from "./SubFooter";
import type { ComponentNames } from "../../types/datatypes";
import { ClipLoader } from "react-spinners";

const HomePage = () => {
  const [loadedComponents, setLoadedComponents] = useState({
    header: false,
    hero: false,
    popularCategory: false,
    gifts: false,
    backToSchool: false,
    saveNow: false,
    discoverShops: false,
    freshBlog: false,
    questionaire: false,
    subFooter: false,
    footer: false,
  });

  const handleLoaded = (component: ComponentNames) => {
    setLoadedComponents((prev) => ({ ...prev, [component]: true }));
  };

  const allLoaded = Object.values(loadedComponents).every(Boolean);

  return (
    <>
      {!allLoaded && (
        <div className="overlay-loader">
          <ClipLoader color="#ff6f61" size={70} speedMultiplier={1.2} />
        </div>
      )}
      <div className="body-wrapper">
        <Header onLoaded={() => handleLoaded("header")} />
        <HeroSection onLoaded={() => handleLoaded("hero")} />
        <PopularCategorySection
          onLoaded={() => handleLoaded("popularCategory")}
        />
        <GiftsSection onLoaded={() => handleLoaded("gifts")} />
        <BackToSchoolSection onLoaded={() => handleLoaded("backToSchool")} />
        <SaveNowSection onLoaded={() => handleLoaded("saveNow")} />
        <DiscoverShops onLoaded={() => handleLoaded("discoverShops")} />
        <FreshBlogSection onLoaded={() => handleLoaded("freshBlog")} />
        <QuestionnaireSection onLoaded={() => handleLoaded("questionaire")} />
        <SubFooter onLoaded={() => handleLoaded("subFooter")} />
        <Footer onLoaded={() => handleLoaded("footer")} />
      </div>
    </>
  );
};

export default HomePage;

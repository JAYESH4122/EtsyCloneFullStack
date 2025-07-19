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

const HomePage = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <HeroSection />
      <PopularCategorySection />
      <GiftsSection />
      <BackToSchoolSection />
      <SaveNowSection />
      <DiscoverShops />
      <FreshBlogSection />
      <QuestionnaireSection />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default HomePage;

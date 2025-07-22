export interface HeaderData {
  logo: {
    altText: string;
  };
  categories: {
    button: string;
  };
  search: {
    placeholder: string;
  };
  navigation: {
    signIn: string;
    country: string;
  };
  subHeader: {
    gifts: string;
    charmShop: string;
    homeFavorites: string;
    fashionFinds: string;
    registry: string;
  };
}

export interface HeroImageAlts {
  mainImage: string;
  secondaryImage: string;
}

export interface BottomContent {
  title: string;
  subtitle: string;
}

export interface HeroSectionData {
  title: string;
  subtitle: string;
  shopNowButton: string;
  imageAlts: HeroImageAlts;
  "bottom-content": BottomContent;
}

export interface PopularCardProps {
  src: string;
  alt: string;
  caption: string;
}

export interface PopularCategory {
  title: string;
  popularCard: PopularCardProps[];
}

export interface GiftCategoryData {
  title: string;
  giftcard: GiftCardProps[];
}

export interface GiftCardProps {
  src: string;
  alt: string;
  caption: string;
}

export interface FullData {
  popularcategory: PopularCategory;
}

export interface PopularGiftsSectionType {
  title: string;
  popularGiftsCard: PopularGiftsCardProps[];
}

export interface PopularGiftsCardProps {
  productImageSrc: string;
  heading: string;
  ratingCount: string;
  rupeesign: string;
  price: string;
  offerprice: string;
  offerpercentage: string;
}
export interface BackToSchoolImage {
  src: string;
  width: number;
  height: number;
}

export interface BackToSchoolData {
  title: string;
  subtitle: string;
  ctaText: string;
  description: string;
  images: BackToSchoolImage[];
}

export interface BackToSchoolSectionData {
  backToSchool: BackToSchoolData;
}

export interface Shop {
  productImage: string;
  productAlt: string;
  listingId: string;
  shopLogo: string;
  shopName: string;
  logoHeight: number;
}

export interface DiscoverShopsData {
  title: string;
  subtitle: string;
  ctaText: string;
  shops: Shop[];
}

export interface DiscoverShopsSectionData {
  discoverShops: DiscoverShopsData;
}

export interface FooterLink {
  text: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  shopLinks: FooterLink[];
  sellLinks: FooterLink[];
  aboutLinks: FooterLink[];
  helpLinks: FooterLink[];
  footerBottomLinks: string[];
  countryInfo: {
    country: string;
    language: string;
    currency: string;
  };
  copyright: string;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

export interface BlogSectionData {
  sectionTitle: string;
  posts: BlogPost[];
}

export interface Question {
  id: number;
  title: string;
  content: string;
}

export interface QuestionnaireData {
  mainTitle: string;
  subtitle: string;
  questions: Question[];
  helpSection: {
    title: string;
    buttonText: string;
  };
}

export interface SaveNowItem {
  id: number;
  imageUrl: string;
  category: string;
  discount: string;
}

export interface SaveNowData {
  heading: string;
  items: SaveNowItem[];
}

export interface SubFooterData {
  emailSection: {
    text: string;
    placeholder: string;
    buttonText: string;
  };
  renewableEnergySection: {
    text: string;
  };
}

export interface SectionContentMap {
  header: HeaderData;
  heroSection: HeroSectionData;
  popularcategory: PopularCategory;
  giftsSection: GiftCategoryData;
  backToSchoolSection: BackToSchoolSectionData;
  saveNowSection: SaveNowData;
  discoverShopsSection: DiscoverShopsSectionData;
  freshBlogSection: BlogSectionData;
  questionnaireSection: QuestionnaireData;
  subFooter: SubFooterData;
  footer: FooterData;
}

export interface SectionFromDB {
  _id: string;
  type: keyof SectionContentMap;
  content: SectionContentMap[keyof SectionContentMap];
}

export type SectionProps = {
  onLoaded: () => void;
};

export type ComponentNames =
  | "header"
  | "hero"
  | "popularCategory"
  | "gifts"
  | "backToSchool"
  | "saveNow"
  | "discoverShops"
  | "freshBlog"
  | "questionaire"
  | "subFooter"
  | "footer";

import type { PopularGiftsCardProps } from "../../types/datatypes";

const PopularGiftsCard = ({
  productImageSrc,
  heading,
  ratingCount,
  price,
  rupeesign,
  offerprice,
  offerpercentage,
}: PopularGiftsCardProps) => {
  return (
    <div className="popular-gift-card-container">
      <div className="popular-gift-card-image-container">
        <img alt="Personalized Beach Towel" src={productImageSrc} />

        <div className="play-btn-container">
          <div className="play-btn-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <polygon points="4 4 4 20 20 12 4 4"></polygon>
            </svg>
          </div>
        </div>
        <div className="popular-gifts-content-wrapper">
          <h3>{heading}</h3>
          <div className="rating-count-container">
            <span className="rating-star-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
              </svg>
            </span>
            <span className="rating-count">({ratingCount})</span>
          </div>
          <div className="price-and-offer-div">
            <p className="price-container">
              <span>{rupeesign}</span>
              <span>{price}</span>
            </p>
            <p className="offer-container">
              <span className="offer-price">
                {" "}
                <span>{rupeesign}</span>
                <span>{offerprice}</span>
              </span>
              <span>({offerpercentage})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularGiftsCard;

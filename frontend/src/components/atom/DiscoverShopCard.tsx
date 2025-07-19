import type { Shop } from "../../types/datatypes";

const ShopCard = ({ shop }: { shop: Shop }) => {
  return (
    <div className="discover-shops-cards">
      <img
        src={shop.productImage}
        alt={shop.productAlt}
        data-listing-id={shop.listingId}
      />
      <div className="brand-container">
        <img src={shop.shopLogo} alt={shop.shopName} height={shop.logoHeight} />
        <p className="brandname">{shop.shopName}</p>
      </div>
    </div>
  );
};

export default ShopCard;

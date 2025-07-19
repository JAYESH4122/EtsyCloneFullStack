import type { BackToSchoolImage } from "../../types/datatypes";

const BackToSchoolCard = (props: BackToSchoolImage & { className?: string }) => {
  const { src, width, height, className = "" } = props;
  
  return (
    <div className={`row-one-column-second ${className}`}>
      <div className="row-one-column-second-container">
        <img src={src} alt="" width={width} height={height} />
      </div>
    </div>
  );
};

export default BackToSchoolCard;
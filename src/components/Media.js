import fullImage from "../images/test-image-full.png";
import smImage from "../images/test-image-sm.png";

const Media = () => {
  return (
    <picture>
      <source srcSet={fullImage} media="(min-width: 658px)" />
      <img src={smImage} alt="MDN" />
    </picture>
  );
};

export default Media;

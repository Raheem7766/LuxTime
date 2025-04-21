import SliderItem from "./SliderLogosItem";
import casio from "../assets/casio.png";
import omega from "../assets/omega.png";
import seiko from "../assets/seiko.png";
import rolex from "../assets/rolex.png";
import patek from "../assets/patek.png";
import tissot from "../assets/tissot.png";
import hublot from "../assets/hublot.png";
import ap from "../assets/ap.png";
import chanel from "../assets/chanel.png";

const Slider = () => {
  const upperSlider = [
    casio,
    omega,
    seiko,
    rolex,
    patek,
    tissot,
    hublot,
    ap,
    chanel,
    casio,
    omega,
    seiko,
    rolex,
    patek,
    tissot,
    hublot,
    ap,
    chanel,
  ];

  return (
    <div className="container mx-auto mt-36"> 
      <SliderItem images={upperSlider} from={0} to={"-100%"} />
    </div>
  );
};

export default Slider;
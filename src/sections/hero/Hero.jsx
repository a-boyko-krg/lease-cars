import { Link } from 'react-router-dom';
import Slider from '@/components/swiper/Swiper';

function Hero() {
  return (
    <>
      <section className="top">
        <div className="container">
          <h1 className="top__title">Leasing From D&M</h1>
          <a className="top__link" href="/new-cars">
            find a car
          </a>
        </div>
      </section>
      <div className="slider">
         <Slider/>
      </div>
    </>
  );
}
export default Hero;

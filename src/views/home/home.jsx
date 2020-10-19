import React from "react";
import homeHeroShip from "../../assets/home-bg-ship.jpg";
import homeHeroPrime from "../../assets/home-bg-prime.jpg";
import homeHeroComputer from "../../assets/home-bg-computer.jpg";
import homeHeroAlexa from "../../assets/home-bg-alexa.jpg";
import { Carousel } from "react-bootstrap";
import ShopBySection from "../../components/home/ShopBySection";
import DiscoverSection from "../../components/home/DiscoverSection";
import PopularSection from "../../components/home/PopularSection";
import TrendingSection from './../../components/home/TrendingSection';
import RecommendSection from "../../components/home/RecommendSection";
import BestSellers from './../../components/home/BestSellers';

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeHeroShip}
              alt="Amazon Ship"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeHeroPrime}
              alt="Amazon Prime"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeHeroAlexa}
              alt="Amazon Alexa"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeHeroComputer}
              alt="Amazon Computer"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home__content">
        <div className="home__shop">
          <ShopBySection/>
        </div>
        <div className="home__discover">
          <DiscoverSection />
        </div>
        <div className="home__popular">
          <PopularSection/>
        </div>
        <div className="home__trending">
          <TrendingSection/>
        </div>
        <div className="home__recommend">
          <RecommendSection/>
        </div>
        <div className="home__best-sellers">
          <BestSellers/>
        </div>
      </div>
    </div>
  );
};

export default Home;

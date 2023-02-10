import "./Nav.css";
import Carousel from "react-bootstrap/Carousel";
import slide0 from "../images/slide0.jpg";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
const Imageslide = () => {
  return (
    <>
      <div className="full-slide">
        <h1 className="webfirst">
          All Item <h1>Up to 40% off</h1>
          <h2 className="men">
            <p className="titleof-menu">MEN</p> -WEAR
          </h2>
        </h1>
      
      {/* slide content */}
      <div className="contimg">
        <div className="slidemain">
          <Carousel className=" carousel slide" data-ride="carousel">
            <Carousel.Item interval={1000} className="slide1">
              <img
                className="d-block w-100 myimg"
                src={slide0}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500} className="slide1">
              <img
                className="d-block w-100 myimg"
                src={slide1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500} className="slide1">
  <img
    className="d-block w-100 myimg"
    src={slide2}
    alt="Second slide"
  />
</Carousel.Item>
          </Carousel>
        </div>
      </div>
      </div>
    </>
  );
};
export default Imageslide;

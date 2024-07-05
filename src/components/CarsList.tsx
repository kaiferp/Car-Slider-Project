import React, { useState, useEffect, useRef } from 'react';
import "../styles/CarsList.css";
import { ReactComponent as ChevronCircle } from "../icons/chevron-circled.svg";
import { ReactComponent as ChevronSmall } from "../icons/chevron-small.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const CarsList = () => {
  const [data, setData] = useState([]);
  const customSlider = useRef<Slider>(null);

  const viewPort = {
    slidesToShow: data.length < 4 ? data.length : 4,
    dots: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length < 4 ? data.length : 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.13,
          centerMode: true,
          centerPadding: '11%',
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("./api/cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log("Error:", e));
  }, []);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div  className="cars-container">
        <Slider ref={customSlider} {...viewPort}>
          {data.map((ele: Car) => (
            <div key={ele.id} className="car-item">
              <div className="car-detail" aria-hidden="true">
                <div style={{ color: "#808c98" }}>
                  {ele.bodyType.toUpperCase()}
                </div>
                <div className="model-name-type">
                  <div style={{ paddingRight: "10px" }}>
                    {ele.modelName}
                  </div>
                  <div style={{ color: "#808c98" }}>
                    {ele.modelType}
                  </div>
                </div>
              </div>
              <img src={ele.imageUrl} alt="car display" className="car-img" />
              <div className="links">
                <Link to={`/learn/${ele.id}`}>
                  <div style={{ color: "#337ac0" }}>
                    LEARN <ChevronSmall className="chevron-small" />
                  </div>
                </Link>
                <Link to={`/shop/${ele.id}`}>
                  <div style={{ color: "#337ac0" }}>
                    SHOP <ChevronSmall className="chevron-small" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="button-nav">
          <button
            aria-label="previous"
            onClick={() => customSlider?.current?.slickPrev()}
          >
            <ChevronCircle className="button-prev" />
          </button>
          <button
            aria-label="next"
            onClick={() => customSlider?.current?.slickNext()}
          >
            <ChevronCircle className="button-next" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default CarsList;

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

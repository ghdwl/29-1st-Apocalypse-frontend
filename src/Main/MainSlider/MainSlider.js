import React, { useEffect, useState } from 'react';
import MainSliderComp from './MainSliderComp/MainSliderComp';
import i1 from './pics/main_1.jpeg';
import i2 from './pics/main_2.jpeg';
import i3 from './pics/main_3.jpeg';
import './MainSlider.scss';

function MainSlider() {
  let sliderArr = [
    <MainSliderComp
      src={i1}
      title="대한민국 국군의 제식 소총의 재탄생"
      key={1}
    />,
    <MainSliderComp src={i2} title="마음의 고향 같은 소총" key={2} />,
    <MainSliderComp src={i3} title="숨고싶을 때는 이것을" key={3} />,
  ];

  const [x, setX] = useState(0);
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const goLeft = e => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  const auto = () => {
    slideInterval = setInterval(goRight, intervalTime);
  };

  useEffect(() => {
    setX(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [x]);

  return (
    <div className="mainSlider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={item}
            className={index === x ? 'slide active' : 'slide'}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button className="goLeft" onClick={goLeft}>
        <img className="left" src="/images/left.svg" alt="arrow" />
      </button>
      <button className="goRight" onClick={goRight}>
        <img className="right" src="/images/right.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default MainSlider;

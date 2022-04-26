import React, { useEffect, useState, useRef } from 'react';
import MediaAsset from './MediaAsset/MediaAsset';
import MoreText from './MoreText/MoreText';
import Product from './Product/Product';
import Benefit from './Benefit/Benefit';
import MainSlider from './MainSlider/MainSlider';
import MAIN_DATA from './MainData';
import './Main.scss';

function Main() {
  const [product, setProduct] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data.Product);
      });
  }, []);

  const handleLeftClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!product || !product.length) return null;

  return (
    <main className="main">
      <MainSlider />
      <section className="section1">
        <div className="productBox">
          <img className="productImg" alt="img" src={product[4].image} />
          <h2 className="titleId1">{product[4].korean_name}</h2>
          <MoreText product={product[4]} />
        </div>
        <img
          className="section1Img"
          alt="img"
          src="https://images.unsplash.com/photo-1602510904648-cef1a47d92d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
      </section>

      <section className="section2">
        <img
          className="seciton2Img"
          alt="img"
          src="https://images.unsplash.com/photo-1561323577-5b76286cb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3574&q=80"
        />
        <div className="text">
          <h1 className="title">폭발은 예술이다</h1>
          <MoreText />
        </div>
      </section>

      <section className="section3">
        {MAIN_DATA[0].mediaAsset1.map(data => {
          return <MediaAsset key={data} mediaAssetData={data} />;
        })}
      </section>

      <section className="section4">
        <h1 className="title">완벽한 무기</h1>
        <div className="productList">
          <button className="arrow" onClick={handleLeftClick}>
            <img className="left" src="/images/left.svg" alt="arrow" />
          </button>
          <div className="carousel" ref={carousel}>
            {product.length > 0 &&
              product.map(com => {
                return <Product productList={com} key={com.id} />;
              })}
          </div>
          <button className="arrow" onClick={handleRightClick}>
            <img className="right" src="/images/right.svg" alt="arrow" />
          </button>
        </div>
      </section>

      <section className="section5">
        {MAIN_DATA[0].mediaAsset2.map(data => {
          return <MediaAsset key={data} mediaAssetData={data} />;
        })}
      </section>

      <section className="section6">
        {MAIN_DATA[0].benefit.map(data => {
          return (
            <>
              <div className={data.line} />
              <Benefit data={data} />
            </>
          );
        })}
      </section>
    </main>
  );
}

export default Main;

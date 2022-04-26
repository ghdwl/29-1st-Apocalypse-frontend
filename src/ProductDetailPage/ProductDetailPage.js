import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Benefit from './Benefit/Benefit';
import Product from './Product/Product';
import ProductDetailTop from './ProductDetailTop/ProductDetailTop';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import MAIN_DATA from '../Main/MainData';
import './ProductDetailPage.scss';

function ProductDetailPage() {
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const carousel = useRef(null);
  const params = useParams('');

  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data.Product);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'unset';
    fetch(`/data/productDetailData.json`)
      // fetch(`http://3.34.199.69:8080/products/${params.productid}`)
      .then(res => res.json())
      .then(data => {
        const res = data.product[0];
        setProductDetail(res[params.productid * 1 - 1]);
      });
  }, [params]);

  const handleLeftClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="productDetailPage">
      <img
        className="headerImg"
        alt="img"
        src="https://images.unsplash.com/photo-1614278396392-7df3d46ce5f9?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="breadCrumbs">
        <Link to="/" className="breadCrumbsItem">
          홈
        </Link>

        <p className="delimiter">/</p>
        <Link to="/" className="breadCrumbsItem" href="#">
          전체
        </Link>
      </div>
      <div className="productFull">
        {productDetail && <ProductDetailTop productDetail={productDetail} />}
        <ProductDetailInfo productDetail={productDetail} />
      </div>

      <img
        className="lazyImg"
        alt="img"
        src="https://images.unsplash.com/photo-1580741569354-08feedd159f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

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

      <div className="benefitList">
        {MAIN_DATA[0].benefit.map(data => {
          return (
            <>
              <div className={data.line} />
              <Benefit data={data} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetailPage;

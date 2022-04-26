import React, { useState } from 'react';
import './ProductDetailInfo.scss';

function ProductDetailInfo({ productDetail }) {
  const [viewInfo, setViewInfo] = useState(false);

  return (
    <div
      className="productDetailInfo"
      onClick={() => {
        setViewInfo(!viewInfo);
      }}
    >
      <div className="infoHeader">
        <h2 className="title">사용방법</h2>
        <button className="productInfoBtn">
          {viewInfo ? (
            <img src="/images/left.svg" alt="down" className="down" />
          ) : (
            <img src="/images/right.svg" alt="up" className="up" />
          )}
        </button>
      </div>
      {viewInfo && <p className="info">{productDetail.description}</p>}
    </div>
  );
}

export default ProductDetailInfo;

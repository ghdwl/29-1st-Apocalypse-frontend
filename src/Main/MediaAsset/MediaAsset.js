import React from 'react';
import MoreText from '../MoreText/MoreText';
import './MediaAsset.scss';

function MediaAsset({ mediaAssetData }) {
  return (
    <div className="mediaAsset">
      <img className="productImg" alt="img" src={mediaAssetData.img} />
      <div className="text">
        <h1 className="title">{mediaAssetData.title}</h1>
        <MoreText />
      </div>
    </div>
  );
}

export default MediaAsset;

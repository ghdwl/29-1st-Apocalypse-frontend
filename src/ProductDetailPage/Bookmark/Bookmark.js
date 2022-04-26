import React from 'react';
import UseLocalStorage from '../UseLocalStorage';
import './Bookmark.scss';

function Bookmark({ product }) {
  const [bookmark, setBookmark] = UseLocalStorage(`id${product.id}`, false);

  return (
    <div className="bookmark">
      <div className="bookmarkIcon" onClick={() => setBookmark(!bookmark)}>
        {bookmark ? (
          <img
            class="wishListOn"
            src="/images/wish-list-on.svg"
            alt="wish list"
          />
        ) : (
          <img
            class="wishListOff"
            src="/images/wish-list.svg"
            alt="wish list"
          />
        )}
      </div>
    </div>
  );
}

export default Bookmark;

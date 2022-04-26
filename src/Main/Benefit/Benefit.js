import React from 'react';
import './Benefit.scss';

function Benefit({ data }) {
  return (
    <a className="benefitLink" href="/">
      <div className="benefitMain">
        <h2 className="benefitTitle">{data.title}</h2>
        <p className="explain">{data.explain}</p>
      </div>
    </a>
  );
}

export default Benefit;

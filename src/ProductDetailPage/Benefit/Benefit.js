import React from 'react';
import './Benefit.scss';

function Benefit({ data }) {
  return (
    <a className="benefit" href="/">
      <h2 className="benefitTitle">{data.title}</h2>
      <p className="explain">{data.explain}</p>
    </a>
  );
}

export default Benefit;

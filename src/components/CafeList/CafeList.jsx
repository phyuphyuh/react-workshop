import "./CafeList.css";

import React from 'react';
import Cafe from '../Cafe/Cafe';

function CafeList({cafesData}) {
  return (
    <div className="cafe-list">
      { cafesData.map( cafeData => <Cafe cafeData={cafeData} key={cafeData.title} />) }

      {/* <Cafe cafeData={cafeData[0]} />
      <Cafe cafeData={cafeData[1]} />
      <Cafe cafeData={cafeData[2]}/> */}
    </div>
  );
}

export default CafeList;

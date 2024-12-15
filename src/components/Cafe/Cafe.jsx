// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import "./Cafe.css";

// created with rsf + Tab
import React from 'react';

function Cafe({cafeData}) {
  // const cafeData = {
  //   picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
  //   title: "DDSK SAIGON KITCHEN",
  //   address: "ss, 135-0061, Tokyo",
  //   criteria: ["Power sockets", "Quiet"]
  // };
  const url = `https://www.google.com/maps/search/?api=1&query=${cafeData.title} ${cafeData.address}`;

  return (
    <div className="cafe-card">
       <img src={cafeData.picture} alt={cafeData.title} />
      <div>
        <div>
          <h5>{cafeData.title}</h5>
          <p>
            { cafeData.criteria.map( criterion => <span key={criterion}>{criterion}</span>) }

            {/* <span>{cafeData.criteria[0]}</span>
            <span>{cafeData.criteria[1]}</span> */}
          </p>
        </div>
        <a target="_blank" href={url}>Show the map 📍</a>
      </div>
    </div>
  );
}

export default Cafe;

import React from "react";

/* 1 */
const Card = ({ card }) => {
  return (
    <div className="col-3 my-1">
      {/* 2 */}
      <img
        className="mx-auto"
        src={card.image}
        height="100%"
        width="100%"
        key="front"
      />
    </div>
  );
};

export default Card; /* 3 */

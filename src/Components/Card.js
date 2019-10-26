import React, { useState } from "react"; /* 1 */

import cardBack from "../images/CardBack.jpg"; /* 3 */

const Card = ({ card, checkFlipped }) => {
  const [flipped, changeFlip] = useState(false); /* 1 */

  return (
    <div className="col-3 my-1">
      <img
        className="mx-auto"
        src={flipped ? card.front : cardBack}
        height="100%"
        width="100%"
        key="back"
        onClick={() => changeFlip(!flipped)}
      />
    </div>
  );
};

export default Card;

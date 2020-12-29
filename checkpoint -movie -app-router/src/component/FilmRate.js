import React from "react";

const Rate = ({ Rate, setSearchByRate, rating }) => {
  const RateStars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span key={i} onClick={() => setSearchByRate(i)}>
            {" "}
            ★{" "}
          </span>
        );
      } else {
        starsArray.push(
          <span key={i} onClick={() => setSearchByRate(i)}>
            {" "}
            ☆{" "}
          </span>
        );
      }
    }
    return starsArray;
  };

  return <div>{RateStars(Rate)} </div>;
};

Rate.defaultProps = {
  setSearchByRate: () => {},
  Rate: 1,
};
export default Rate;

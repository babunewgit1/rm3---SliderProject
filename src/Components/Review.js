import React, { useState } from "react";
import reviews from "../data";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const reviewObject = reviews[index];
  const { name, job, image, text } = reviewObject;

  const checkIndex = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }

    return number;
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const random = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (index === randomNumber) {
      randomNumber = randomNumber + 1;
    }
    return setIndex(checkIndex(randomNumber));
  };

  return (
    <>
      <div className="reviewOne">
        <div className="reviewOne-img text-center">
          <div className="reviewOneImgquerte">
            <img src={image} alt={name} />
            <span>
              <FaQuoteRight />
            </span>
          </div>
          <h4>{name}</h4>
          <span>{job}</span>
        </div>
        <div className="reviewText">
          <p>{text}</p>
        </div>
        <div className="control text-center mt-4">
          <div className="pn">
            <button
              onClick={prev}
              className="btn btn-warning text-white px-4 mx-3"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="btn btn-warning text-white px-4 mx-3"
            >
              Next
            </button>
          </div>
          <div className="random mt-3">
            <button
              onClick={random}
              className="btn btn-success text-white px-4"
            >
              Random Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

import React, { useState } from "react";

const Card = ({ setval, val }) => {
  const [status, setstatus] = useState(true);
  const handleSubmitinc = () => {
    setstatus(false);
    setval((inival) => inival + 1);
  };
  const handleSubmitdec = () => {
    setstatus(true);
    if (val > 0) {
      setval((inival) => inival - 1);
    }
  };
  return (
    <>
      {status ? (
        <button
          className="btn btn mt-auto btn btn-outline-success"
          onClick={handleSubmitinc}
        >
          Add To Cart
        </button>
      ) : (
        <button
          className="btn btn mt-auto btn btn-outline-danger"
          onClick={handleSubmitdec}
        >
          Remove from Cart
        </button>
      )}
    </>
  );
};

export default Card;

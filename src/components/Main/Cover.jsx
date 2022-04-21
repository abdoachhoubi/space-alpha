import React from "react";

const Cover = (props) => {
  return (
    <div
      className="card-cover"
      style={{
        backgroundImage: `url(${props.src})`,
      }}
    ></div>
  );
};

export default Cover;

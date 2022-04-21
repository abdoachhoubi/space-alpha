import React, { useState } from "react";
import Cover from "./Cover";

const Card = ({ data }) => {
  // States
  let [cover, setCover] = useState(
    <Cover src="https://source.unsplash.com/dCgbRAQmTQA" />
  );

  // Checking if the image exists in the current url
  const img = new Image();
  img.src = data.imageUrl;
  img.addEventListener("load", () => {
    setCover(<Cover src={data.imageUrl} />);
  });
  img.addEventListener("error", () => {
    setCover(<Cover src="https://source.unsplash.com/dCgbRAQmTQA" />);
  });

  // Clearing The console becaause of the Network Errors
  console.clear();

  return (
    <div className="card">
      {cover}
      <div className="card-content">
        <div className="card-content-preview">
          <h2 className="card-heading">{data.title}</h2>
          <p className="card-description">{data.summary.substr(0, 140)}...</p>
        </div>
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="card-url"
        >
          Read Full Story
        </a>
      </div>
    </div>
  );
};

export default Card;

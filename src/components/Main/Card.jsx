import React, { useState } from "react";

const Card = ({ data }) => {
  let [src, setSrc] = useState("https://source.unsplash.com/dCgbRAQmTQA");
  const img = new Image();
  img.src = data.imageUrl;
  img.onload = () => {
    setSrc(data.imageUrl);
  };

  return (
    <div className="card">
      <div
        className="card-cover"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
      <div className="card-content">
        <div className="card-content-preview">
          <h2 className="card-heading">{data.title}</h2>
          <p className="card-description">{data.summary.substr(0, 120)}...</p>
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

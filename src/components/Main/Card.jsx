import React, { useState } from "react";
import { Minus } from "react-feather";

const Card = ({ data }) => {
  let [src, setSrc] = useState("https://source.unsplash.com/dCgbRAQmTQA");

  let [cover, setCover] = useState(
    <div className="card-cover">
      <div className="cloader">
        <Minus color="#FFFFFF" size={30} />
      </div>
    </div>
  );

  const img = new Image();
  img.src = data.imageUrl;

  img.addEventListener("load", () => {
    setSrc(data.imageUrl);
    setCover(
      <div
        className="card-cover"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
    );
  });

  img.addEventListener("error", () => {
    setSrc("https://source.unsplash.com/dCgbRAQmTQA");
    setCover(
      <div
        className="card-cover"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
    );
  });

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

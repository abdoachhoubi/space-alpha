import React, { useState, useEffect } from "react";
import { Minus } from "react-feather";
import Card from "./Card";

const Main = () => {
  let [posts, setPosts] = useState(
    <main>
      <div className="loader">
        <Minus color="#FFFFFF" size={30} />
      </div>
    </main>
  );
  let [limit, setLimit] = useState(30);
  let [btn, setBtn] = useState("main-btn");
  let [loader, setLoader] = useState("hidden");

  let getNews = () => {
    async function getData() {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`
      );
      const data = await response.json();
      setPosts(data.map((item) => <Card key={item.id} data={item} />));
      setLoader("hidden");
      setBtn("main-btn");
    }
    getData();
  };

  useEffect(getNews, [limit]);

  const showMore = () => {
    setBtn("hidden");
    setLoader("loader");
    setLimit((prevLimit) => prevLimit + 9);
  };
  return (
    <main>
      <h1 className="main-heading">Latest Space News</h1>
      <div className="main">{posts}</div>
      <button className={btn} onClick={showMore}>
        Show More
      </button>
      <div className={loader}>
        <Minus color="#FFFFFF" size={30} />
      </div>
    </main>
  );
};

export default Main;

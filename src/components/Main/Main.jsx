import React, { useState, useEffect } from "react";
import Card from "./Card";

const Main = () => {
  let [posts, setPosts] = useState(<h2>loading</h2>);
  let [limit, setLimit] = useState(30);

  let getNews = () => {
    async function getData() {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`
      );
      const data = await response.json();
      setPosts(data.map((item) => <Card key={item.id} data={item} />));
    }
    getData();
  };

  useEffect(getNews, [limit]);

  const showMore = () => {
    setLimit((prevLimit) => prevLimit + 9);
  };
  return (
    <main>
      <h1 className="main-heading">Latest Space News</h1>
      <div className="main">{posts}</div>
      <button className="main-btn" onClick={showMore}>
        Show More
      </button>
    </main>
  );
};

export default Main;

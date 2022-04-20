import React, { useRef, useState, useEffect } from "react";
import { ArrowDown } from "react-feather";

const Header = () => {
  let [height, setHeight] = useState(10);
  let header = useRef();
  const goDown = () => {
    window.scrollBy(0, height);
  };

  useEffect(() => {
    setHeight(header.current.clientHeight);
  }, []);
  return (
    <header ref={header} className="bravo alpha">
      <div className="container">
        <h1 className="heading">All the space flights news in one place</h1>
        <p className="sub-heading">
          Get news about Spaceflights for NASA, SPACEX, Virgin Orbit, Axiom
          Space and more...
        </p>
        <div className="btn" onClick={goDown}>
          <ArrowDown color="#FFFFFF" size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;

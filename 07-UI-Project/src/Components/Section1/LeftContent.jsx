import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-3/10">
    <HeroText/>
<Arrow/>
    </div>
  );
};

export default LeftContent;

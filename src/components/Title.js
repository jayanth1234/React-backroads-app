import React from "react";

const Title = (props) => {
  const { mainTitle, subTitle } = props;
  return (
    <div className="section-title">
      <h2>
        {mainTitle} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;

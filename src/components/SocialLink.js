import React from "react";

const SocialLink = (props) => {
  const { href, icon, itemClass } = props;
  return (
    <li>
      <a href={href} target="/_blank" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;

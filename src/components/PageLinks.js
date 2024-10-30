import React from "react";
import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((pageLink) => {
        return (
          <PageLink {...pageLink} key={pageLink.id} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};

export default PageLinks;

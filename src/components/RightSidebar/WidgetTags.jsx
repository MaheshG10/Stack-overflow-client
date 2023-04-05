import React from "react";
import "./RightSidebar.css";

const WidgetTags = () => {
  const tags = [
    "c",
    "reactjs",
    "mongodb",
    "mysql",
    "python",
    "nextjs",
    "expressjs",
    "chakra-ui",
    "html",
    "css",
    "firebase",
    "cpp",
    "node.js",
    "javascript",
    "java",
  ];
  return (
    <div className="widget-tags">
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;

import React from "react";

function Headlines(props) {
  return (
    <div>
      {props.headline.map((headline, i) => {
        return (
          <li key={headline.title + i}>
            <h2>{headline.author}</h2>
            <h3>{headline.title}</h3>
            <a href={headline.url}>{headline.source.name}</a>
            <h4>{headline.publishedAt.split("T")[0]}</h4>
            <img src={headline.urlToImage} alt={headline.title} />
          </li>
        );
      })}
    </div>
  );
}

export default Headlines;

import React from "react";
import uuid from "react-uuid";
import "../styles/App.css";

const AllNews = (props) => {
  return (
    <>
      <div className="card-grid">
        {props.info.map((article, i) => {
          // return <li key={article.title + i}>{article.title}</li>;
          return (
            <div className="single-article" key={uuid()}>
              <img
                src={article.urlToImage}
                alt={article.title}
                className="all-img"
              />
              <h1 className="article-title">{article.title}</h1>
              <p className="article-desc">{article.description}</p>
              <a
                href={article.url}
                className="article-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.source.name}
              </a>
              <h4 className="article-date">
                {article.publishedAt.split("T")[0]}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllNews;

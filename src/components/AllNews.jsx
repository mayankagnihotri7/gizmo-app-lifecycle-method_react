import React from "react";
import uuid from "react-uuid";
import "../styles/App.css";

const AllNews = (props) => {
  return (
    <>
    {/* <div className="single-article" key={uuid()}>
        <img src={props.info[0].urlToImage} alt={props.info[0].title} className="all-img" />
        <h1 className="article-title">{props.info[0].title}</h1>
        <p className="article-desc">{props.info[0].description}</p>
        <a
          href={props.info[0].url}
          className="article-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.info[0].source.name}
        </a>
        <h4 className="article-date">{props.info[0].publishedAt.split("T")[0]}</h4>
      </div> */}
      <div className="card-grid">
        {props.info.slice(1).map((article, i) => {
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

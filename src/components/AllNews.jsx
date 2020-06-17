import React from "react";
import uuid from "react-uuid";
import "../styles/App.css";

const AllNews = (props) => {
  return (
    <>
      {/* <button key={uuid()} onClick={() => <AllNews />}>All</button> */}
      {/* <li>
        <h1>{props.info.title}</h1>
        <h2>{props.info.author}</h2>
        <p>{props.info.description}</p>
        <a href={props.info.url}>{props.info.url}</a>
        <br />
        <img src={props.info.urlToImage} alt={props.info.title} className='all-img' />
      </li> */}
      <div>
        {props.info.map((article, i) => {
          // return <li key={article.title + i}>{article.title}</li>;
          return (
            <li key={uuid()}>
              <h1>{article.title}</h1>
              <h2>{article.description}</h2>
              <a href={article.url}>{article.source.name}</a>
              <h4>{article.publishedAt.split('T')[0]}</h4>
              <img src={article.urlToImage} alt={article.title} />
            </li>
          );
        })}
      </div>
    </>
  );
};

export default AllNews;

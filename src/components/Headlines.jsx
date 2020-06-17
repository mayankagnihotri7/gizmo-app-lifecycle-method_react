import React from "react";

function Headlines(props) {
  return (
    <div className="headlines-flex">
      <h1 className='headers'>Top Headlines:</h1>
      {props.headline.map((headline, i) => {
        return (
          <div key={headline.title + i} className="headlines-card">
            <div className="flex-returns">
              <img
                src={headline.urlToImage}
                alt={headline.title}
                className="all-img-headlines"
              />
              <div>
                <h2 className="article-title">{headline.author}</h2>
                <h3>{headline.title}</h3>
                <a
                  href={headline.url}
                  className="article-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {headline.source.name}
                </a>
                <h4 className="article-date">
                  {headline.publishedAt.split("T")[0]}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Headlines;

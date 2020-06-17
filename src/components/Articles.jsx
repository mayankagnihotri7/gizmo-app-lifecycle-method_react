import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AllNews from "./AllNews";
import NewsSource from "./NewsSource";
import Headlines from './Headlines';
import uuid from 'react-uuid';
import { NEWS_API_KEY } from "../config";

class Articles extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      articles: [],
      sources: [],
      headlines: [],
      index: null,
    };
  }

  componentDidMount() {
    // Everything
    console.log("everything");
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`)
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ articles: articles });
        }
      });

    // Sources
    console.log("sources");
    fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${NEWS_API_KEY}`)
      .then((res) => res.json())
      .then(({ status, sources }) => {
        if (status === "ok") {
          this.setState({ sources: sources });
        }
      });

    // Headlines
    console.log("headlines");
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ headlines: articles });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let { sources, headlines, articles } = this.state;
    console.log(sources, "source");
    console.log(headlines, "head");
    console.log(articles, "art");
  }

  handleChange = () => {
    this.setState({ index: uuid() });
  };

  mySource = (id) => {
    fetch(`https://newsapi.org/v2/everything?sources=${id}&apiKey=${NEWS_API_KEY}`)
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ articles: articles });
        }
      });
  }

  render() {
    console.log("render");
    const { articles, sources, headlines } = this.state;
    return (
      <>
        <Header />
        <div>
          {this.state.sources.slice(1,13).map((source, i) => {
            return (
              <li key={source.name + i}>
                <button onClick={() => this.mySource(source.id)}>{source.name}</button>
              </li>
            );
          })}
        </div>
        <h1>Everything:</h1>
        {articles.length > 0 && <AllNews info={this.state.articles} />}
        
        <h3>Top Headlines:</h3>
        {headlines.length > 0 && <Headlines headline={headlines} />}
        <Footer />
      </>
    );
  }
}

export default Articles;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AllNews from "./AllNews";
import "../styles/App.css";
import Headlines from "./Headlines";
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
      inputText: "",
      country: "in",
      language: 'en' || null
    };
  }

  componentDidMount() {
    // Everything
    console.log("everything");
    fetch(`https://newsapi.org/v2/everything?q=apple&language=${this.state.language}&apiKey=${NEWS_API_KEY}`)
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
      `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${NEWS_API_KEY}`
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

  handleChange = async (e) => {
    await this.setState({ inputText: e.target.value });
    console.log(this.state.inputText, 'input here')
  };

  handleInput = async (e) => {
    try {
      await this.setState({ language: e.target.value });
    } catch (error) {
      return error;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  allArticle = () => {
    fetch(`https://newsapi.org/v2/everything?q=${this.state.inputText}&language=${this.state.language}&apiKey=${NEWS_API_KEY}`)
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ articles: articles });
        }
      });
  };

  mySource = (id) => {
    fetch(
      `https://newsapi.org/v2/everything?sources=${id}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ articles: articles });
        }
      });
  };

  render() {
    console.log("render");
    const { articles, sources, headlines } = this.state;

    return (
      <>
        <Header
          click={this.handleChange}
          value={this.state.language}
          input={this.handleInput}
          submit={this.handleSubmit}
          article={this.allArticle}
        />
        <div className="container">
          <div className="source-btn">
            <button onClick={this.allArticle} className="btn">
              All
            </button>
            {sources.slice(1, 9).map((source, i) => {
              return (
                <li key={source.name + i}>
                  <button
                    className="btn"
                    onClick={() => this.mySource(source.id)}
                  >
                    {source.name}
                  </button>
                </li>
              );
            })}
          </div>
        </div>
        <div className="grid">
          {articles.length > 0 && <AllNews info={articles} />}
          {headlines.length > 0 && <Headlines headline={headlines} />}
        </div>
        <Footer />
      </>
    );
  }
}

export default Articles;

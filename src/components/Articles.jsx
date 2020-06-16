import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sources from './Sources'

class Articles extends React.Component {
  constructor() {
    console.log('constructor')
    super();
    this.state = {
      articles: [],
      sources: [],
      headlines: [],
      index: null
    };
  }

  componentDidMount() {
    // Everything
    console.log("everything");
    fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=73049b40ce334a24a8d4f66f1fe7a1f8`
    )
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ articles: articles });
        }
      });

    // Sources
    console.log("sources");
    fetch(
      `https://newsapi.org/v2/sources?language=en&apiKey=73049b40ce334a24a8d4f66f1fe7a1f8`
    )
      .then((res) => res.json())
      .then(({ status, sources }) => {
        if (status === "ok") {
          this.setState({ sources: sources });
        }
      });

    // Headlines
    console.log("headlines");
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=73049b40ce334a24a8d4f66f1fe7a1f8`
    )
      .then((res) => res.json())
      .then(({ status, articles }) => {
        if (status === "ok") {
          this.setState({ headlines: articles });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sources !== this.state.sources){
      
      console.log(prevState, 'ko')
    }
    let { sources, headlines, articles } = this.state
    console.log(sources, 'source')
    console.log(headlines, 'head')
    console.log(articles, 'art')
  }

  render() {
    console.log("render");
    return (
      <>
        <Header />
        <ul>
          {this.state.sources.map((data, index) => {
            return <Sources info={data} click={() => this.setState({index: index})}>{data.name}</Sources>
          })}
        </ul>
        <Footer />
      </>
    );
  }
}

export default Articles;

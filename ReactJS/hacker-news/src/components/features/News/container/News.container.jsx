import React from "react";
import axiosNews from "../../../../service/axios_news";
import { formatNewsData } from "../../../common/Util";
import NewsView from "../views";

export class NewsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
    };

    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.hideComment = this.hideComment.bind(this);
    this.updateState = this.updateState.bind(this);
    this.upVotes = this.upVotes.bind(this);
  }

  componentDidMount() {
    const { newsData, pageNumber } = this.props;

    if (localStorage.getItem(pageNumber)) {
      console.log(
        `Data is null for Page Number=>${pageNumber}, now we are setting`
      );
      newsData && newsData.length > 0 && this.updateState(newsData);
    } else {
      const newsData = localStorage.getItem(pageNumber);
      this.setState({ news: JSON.parse(newsData) });
      console.log(`Data is in local Storage for ${pageNumber}`);
    }
  }

  updateLocalStorage() {
    const { pageNumber } = this.props;
    localStorage.setItem(pageNumber, JSON.stringify(this.state.news));
  }

  updateState(newsData) {
    this.setState({ news: newsData }, this.updateLocalStorage);
  }

  hideComment(index) {
    console.log("hide Index", index);
    const newsData = [...this.state.news];
    const newsItem = newsData.filter((data) => {
      return data.index === index;
    });
    newsItem[0].hide = true;
    this.updateState(newsData);
  }

  upVotes(index) {
    console.log("hide Index", index);
    const newsData = [...this.state.news];
    const newsItem = newsData.filter((data) => {
      return data.index === index;
    });
    newsItem[0].upVotes++;
    this.updateState(newsData);
  }

  render() {
    const { news } = this.state;
    return (
      news && (
        <NewsView
          hideComment={this.hideComment}
          upVotes={this.upVotes}
          news={news}
        />
      )
    );
  }
}

//Server side rendering || Getting data from API and setting props
NewsContainer.getInitialProps = async (context) => {
  const p = context && context.query && context.query.p ? context.query.p : 0;

  // page Number start in api from 0 index so need to subtract -1
  const apiPageNumber = p > 0 ? p - 1 : 0;

  const queryString = apiPageNumber ? `&page=${apiPageNumber}` : "&page=0";
  const url = `/search?query=foo&tags=story${queryString}`;
  console.log("URL", url);
  const res = await axiosNews.get(url);
  return { newsData: formatNewsData(res.data), pageNumber: apiPageNumber + 1 };
};

export default NewsContainer;

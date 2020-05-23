import React from "react";
import NewsRow from "./NewsRow";
import withStyle from "../../../common/hoc/withStyle";
import styles from "../style/News.style";
import Header from "../../content/Header";

const renderNewsData = (news, hideComment, upVotes) => {
  return news.map((data, index) => {
    return (
      data &&
      data.hide === false && (
        <NewsRow
          hideButtonHandler={hideComment}
          upVotesButtonHandler={upVotes}
          key={data.index}
          data={data}
          rowNumber={index + 1}
        />
      )
    );
  });
};
const NewsView = ({ className, news, hideComment, upVotes }) => {
  return (
    <div className={className}>
      <Header />
      <div>{renderNewsData(news, hideComment, upVotes)}</div>
      <div>
        <a className="moreLink" href={`/news?p=${news[0].nextPage}`}>
          More
        </a>
      </div>
    </div>
  );
};

export default withStyle(NewsView, styles);

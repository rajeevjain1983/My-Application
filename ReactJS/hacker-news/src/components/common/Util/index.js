// Only this Mapper function need to change if Api or Data contract get change in any case
export const formatNewsData = (newsData) => {
  const newsList = [];

  if (newsData && newsData.hits) {
    newsData.hits.forEach((data, index) => {
      const news = {};
      news.nextPage = newsData.page + 2;
      news.index = index + 1;
      news.title = data.title;
      news.points = data.points;
      news.author = data.author;
      news.created_at = data.created_at;
      news.num_comments = data.num_comments;
      news.hide = false;
      news.upVotes = 0;
      news.linkDomain = "facebook.com";
      newsList.push(news);
    });
  }

  return newsList;
};

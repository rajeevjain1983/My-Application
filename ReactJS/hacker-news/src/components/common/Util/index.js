// Only this Mapper function need to change if Api or Data contract get change in any case

export const formatNewsData = (newsData) => {
  const newsList = [];

  const pageInfo = {
    apiPageNumber: newsData.page,
    pageNumber: newsData.page + 1,
    nextPage: newsData.page + 2,
  };

  if (newsData && newsData.hits) {
    newsData.hits.forEach((data, index) => {
      const news = {};
      news.url = data.url;
      news.index = index + 1;
      news.title = data.title;
      news.points = data.points;
      news.author = data.author;
      news.created_at = new Date(data.created_at).toLocaleDateString();
      news.num_comments = data.num_comments;
      news.hide = false;
      news.upVotes = 0;
      news.linkDomain = data.url ? `(${new URL(data.url).host})` : "";
      newsList.push(news);
    });
  }

  return { pageInfo, newsList };
};

const ROUTES_LIST = [
  {
    noSlugPath: "News",
    path: "/News",
    resolver: "/news",
  },
  {
    noSlugPath: "news",
    path: "/news",
    resolver: "/news",
  },
  {
    noSlugPath: "news",
    path: "/",
    resolver: "/news",
  },
  {
    noSlugPath: "hello",
    path: "/hello",
    resolver: "/news",
  },
];

module.exports = { ROUTES_LIST };

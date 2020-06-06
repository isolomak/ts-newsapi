[![NPM](https://nodei.co/npm/ts-newsapi.png)](https://npmjs.org/package/ts-newsapi)

![ci](https://github.com/IvanSolomakhin/ts-newsapi/workflows/ci/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/IvanSolomakhin/ts-newsapi/badge.svg)](https://coveralls.io/github/IvanSolomakhin/ts-newsapi)
[![NPM Downloads](https://img.shields.io/npm/dt/ts-newsapi)](https://npmjs.org/package/ts-newsapi)
[![NPM License](https://img.shields.io/npm/l/ts-newsapi)](LICENSE)

# ts-newsapi
  Client library (SDK) to quickly and easily get started with News API without worrying about the underlying set up.
  
  Powered by https://newsapi.org/
  
  Fast and easy to use.  
  Written in TypeScript.  
  Fully tested with 100% code coverage.  
  
## Installation

| npm | yarn |
|---|---|
| `npm install --save ts-newsapi` | `yarn add ts-newsapi` |

## Getting Started

### [Get API key](https://newsapi.org/) from https://newsapi.org

### Import library

| typescript | javascript |
|---|---|
| `import NewsAPI from 'ts-newsapi'` | `const NewsAPI = require('ts-newsapi')`|

### Get the news

``` typescript
const newsAPI = new NewsAPI('api_key')

// Get the subset of news publishers that top headlines (newsAPI.getTopHeadlines()) are available from. 
// It's mainly a convenience method that you can use to keep track of the publishers available on the API, and you can pipe it straight through to your users.
const sources = await newsAPI.getSources({
    category: 'general',
    language: 'en',
    country: 'us',
});

// Top and breaking headlines  
const topHeadlines = await newsAPI.getTopHeadlines({
    q: 'stocks',
    country: 'us',
    category: 'business',
    pageSize: 20,
    page: 1,
});

// Search through millions of articles from over 50,000 large and small news sources and blogs.
const headlines = await newsAPI.getEverything({
    q: 'stocks',
    qInTitle: 'stock',
    sources: [ 'bbc-news' ],
    language: 'en',
    sortBy: 'relevancy',
    pageSize: 20,
    page: 1,
});
```

### [Documentation](https://newsapi.org/docs)

## Tests

``` bash
  npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

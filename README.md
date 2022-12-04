# ts-newsapi

![ci](https://github.com/IvanSolomakhin/ts-newsapi/workflows/ci/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/IvanSolomakhin/ts-newsapi/badge.svg)](https://coveralls.io/github/IvanSolomakhin/ts-newsapi)
[![NPM Downloads](https://img.shields.io/npm/dt/ts-newsapi)](https://npmjs.org/package/ts-newsapi)
[![NPM License](https://img.shields.io/npm/l/ts-newsapi)](LICENSE)

Client library (SDK) to quickly and easily get started with [News API](https://newsapi.org) without worrying about the underlying set up
  
Fast and easy to use.  
Written in TypeScript.  
Fully tested with 100% code coverage.  
Powered by [newsapi](https://newsapi.org)
  
## Installation

``` bash
npm install --save ts-newsapi
```

## Getting Started

### [Get API key](https://newsapi.org/) from newsapi.org

``` typescript
import NewsAPI from 'ts-newsapi';

const newsAPI = new NewsAPI('api_key');

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

----

## Tests

``` bash
  npm test
```

----

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

----

## Documentation

NewsAPI [Documentation](https://newsapi.org/docs)
  
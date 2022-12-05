import fetch from 'node-fetch';
import querystring from 'querystring';
import NewsAPI from '../src';

jest.mock('node-fetch');

const { Response } = jest.requireActual('node-fetch');

beforeEach(() => {
	// @ts-ignore
	fetch.mockReturnValue(Promise.resolve(new Response('{}')));
});

const TEST_API_KEY = 'test_api_key';

describe('NewsAPI tests', () => {

	const newsApi = new NewsAPI(TEST_API_KEY);

	describe('Sources', () => {

		test('should fetch data successfully without params', async () => {
			await expect( newsApi.getSources() ).resolves.toEqual({ });
			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/sources?${ querystring.stringify({ apiKey: TEST_API_KEY }) }`
			);
		});

		test('should fetch data successfully', async () => {
			await expect(
				newsApi.getSources({
					category: 'business',
					country: 'ua',
					language: 'en',
				})
			).resolves.toEqual({ });

			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/sources?` + [
					querystring.stringify({ apiKey: TEST_API_KEY }),
					querystring.stringify({ category: 'business' }),
					querystring.stringify({ language: 'en' }),
					querystring.stringify({ country: 'ua' }),
				].join('&')
			);
		})

	});

	describe('Top Headlines', () => {

		test('should fetch data successfully without params', async () => {
			await expect( newsApi.getTopHeadlines() ).resolves.toEqual({ });
			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/top-headlines?${ querystring.stringify({ apiKey: TEST_API_KEY }) }`
			);
		});

		test('should fetch data successfully with sources', async () => {
			await expect(
				newsApi.getTopHeadlines({
					// country: 'ua',
					// category: 'business',
					sources: [ 'test-source-1', 'test-source-2' ],
					q: 'query',
					pageSize: 40,
					page: 2,
				})
			).resolves.toEqual({ });

			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/top-headlines?` + [
					querystring.stringify({ apiKey: TEST_API_KEY }),
					querystring.stringify({ q: 'query' }),
					querystring.stringify({ sources: [ 'test-source-1', 'test-source-2' ].join(',') }),
					querystring.stringify({ pageSize: 40 }),
					querystring.stringify({ page: 2 }),
				].join('&')
			);
		})

		test('should fetch data successfully without sources', async () => {
			await expect(
				newsApi.getTopHeadlines({
					country: 'ua',
					category: 'business',
					q: 'query',
					pageSize: 40,
					page: 2,
				})
			).resolves.toEqual({ });

			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/top-headlines?` + [
					querystring.stringify({ apiKey: TEST_API_KEY }),
					querystring.stringify({ q: 'query' }),
					querystring.stringify({ country: 'ua' }),
					querystring.stringify({ category: 'business' }),
					querystring.stringify({ pageSize: 40 }),
					querystring.stringify({ page: 2 }),
				].join('&')
			);
		})

		test('should throw error if source and country params are mixed', async() => {
			await expect(newsApi.getTopHeadlines({ country: 'ua', sources: [ 'test-source-1' ] }))
				.rejects.toThrow();
		});

		test('should throw error if source and category params are mixed', async() => {
			await expect(newsApi.getTopHeadlines({ category: 'business', sources: [ 'test-source-1' ] }))
				.rejects.toThrow();
		});

	});

	describe('Everything', () => {

		test('should fetch data successfully without params', async () => {
			await expect( newsApi.getEverything() ).resolves.toEqual({ });
			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/everything?${ querystring.stringify({ apiKey: TEST_API_KEY }) }`
			);
		});

		test('should fetch data successfully', async () => {
			await expect(
				newsApi.getEverything({
					q: 'query',
					qInTitle: 'titleQuery',
					sources: [ 'test-source-1', 'test-source-2' ],
					domains: [ 'test-domain-1', 'test-domain-2' ],
					excludeDomains: [ 'test-excl-domain-1', 'test-excl-domain-2' ],
					from: '1990-01-01',
					to: '2000-01-01',
					language: 'en',
					sortBy: 'relevancy',
					pageSize: 40,
					page: 2,
				})
			).resolves.toEqual({ });

			expect(fetch).toHaveBeenCalledWith(
				`https://newsapi.org/v2/everything?` + [
					querystring.stringify({ apiKey: TEST_API_KEY }),
					querystring.stringify({ q: 'query' }),
					querystring.stringify({ qInTitle: 'titleQuery' }),
					querystring.stringify({ sources: [ 'test-source-1', 'test-source-2' ].join(',') }),
					querystring.stringify({ domains: [ 'test-domain-1', 'test-domain-2' ].join(',') }),
					querystring.stringify({ excludeDomains: [ 'test-excl-domain-1', 'test-excl-domain-2' ].join(',') }),
					querystring.stringify({ from: '1990-01-01' }),
					querystring.stringify({ to: '2000-01-01' }),
					querystring.stringify({ language: 'en' }),
					querystring.stringify({ sortBy: 'relevancy' }),
					querystring.stringify({ pageSize: 40 }),
					querystring.stringify({ page: 2 }),
				].join('&')
			);
		})

	});

})

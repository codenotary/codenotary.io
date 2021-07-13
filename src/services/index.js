import axios from 'axios';

export const GITHUB_API_CONFIG = {
	headers: {
		common: {
			'content-type': 'application/json; charset=utf-8',
		},
	},
};

// Github proxy instance
export const GithubApiService = axios.create({
	...GITHUB_API_CONFIG,
	baseURL: process.env.GITHUB_API_URL,
});

import axios from 'axios';

interface FetchDataParams {
	q?: string;
	language?: string;
	country?: string;
	category?: string;
	page?:string;
}

export const fetchData = async ({
    q,
	language,
	country,
	category,
	page
}: FetchDataParams) => {
	const API_KEY = 'pub_237333c23ad57c7af8787a80756710de9afce';

	try {
		const response = await axios.get('https://newsdata.io/api/1/news', {
			params: {
				apikey: API_KEY,
				...(q && { q }),
				...(language && { language }),
				...(country && { country }),
				...(category && { category }),
				...(page && { page })
			}
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

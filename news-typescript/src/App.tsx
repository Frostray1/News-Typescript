import axios from 'axios';
import styles from './App.module.scss';
import SearchComponent from './components/Filter/SearchComponent';
import Post from './components/Post/Post';
import { useEffect, useState } from 'react';

interface NewsItem {
	category: string[];
	content: string;
	country: string[];
	creator: null | string;
	description: string;
	image_url: string;
	keywords: string[];
	language: string;
	link: string;
	pubDate: string;
	source_id: string;
	title: string;
	video_url: null | string;
}

function App() {
	const [postList, setPostList] = useState<NewsItem[]>();

	const API_KEY = 'pub_237333c23ad57c7af8787a80756710de9afce';
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://newsdata.io/api/1/news',
					{
						params: {
							apikey: API_KEY,
							language: 'ru'
						}
					}
				);
				setPostList(response.data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	console.log(postList);

	return (
		<div className={styles.main}>
			<SearchComponent />
			<div className={styles.posts}>
				{postList?.map((post, index) => (
					<Post key={index} {...post} />
				))}
			</div>
		</div>
	);
}

export default App;

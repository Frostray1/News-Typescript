import React, { useEffect, useState } from 'react';
import SearchComponent from './components/Filter/SearchComponent';
import Post from './components/Post/Post';
import { fetchData } from './api/api';
import styles from './App.module.scss'
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
	const [postList, setPostList] = useState<NewsItem[]>([]);

	const handleSearch = async (selectedValues: {
		country: string;
		category: string;
		language: string;
	}) => {
		try {
			fetchData(selectedValues)
				.then(result => setPostList(result))
				.catch(error => console.error('Error fetching data:', error));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	console.log(postList)
	return (
		<div className={styles.main}>
			<SearchComponent onSearch={handleSearch} />
			<div className={styles.posts}>
				{postList.map((post, index) => (
					<Post key={index} {...post} />
				))}
			</div>
		</div>
	);
}

export default App;

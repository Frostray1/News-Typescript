import React, { useEffect, useState } from 'react';
import SearchComponent from './components/Filter/SearchComponent';
import Post from './components/Post/Post';
import { fetchData } from './api/api';
import styles from './App.module.scss';
import { Spin } from 'antd';
import PaginationButton from './components/PaginationButton/PaginationButton';

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

interface PaginationLink {
	nextPage: string;
	prevPage: string;
}

function App() {
	const [postList, setPostList] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [pagination, setPagination] = useState<PaginationLink[]>([]);

	useEffect(() => {
		setLoading(true);

		// fetchData({ category: 'top' })
		// 	.then(data => {
		// 		setPagination(data);
		// 		setPostList(data.results);
		// 	})
		// 	.catch(error => console.error('Error fetching data:', error))
		// 	.finally(() => setLoading(false));
	}, []);

	const handleSearch = async (selectedValues: {
		country: string;
		category: string;
		language: string;
	}) => {
		try {
			setLoading(true);

			// fetchData(selectedValues)
			// 	.then(data => setPostList(data.results))
			// 	.catch(error => console.error('Error fetching data:', error))
			// 	.finally(() => setLoading(false));
		} catch (error) {
			console.error('Error fetching data:', error);
			setLoading(false);
		}
	};

	return (
		<div className={styles.main}>
			<SearchComponent onSearch={handleSearch} />
			<div className={styles.posts}>
				{loading ? (
					<Spin className={styles.loader} size='large' />
				) : (
					<>
						<PaginationButton />
						{postList.map((post, index) => (
							<Post key={index} {...post} />
						))}
						<PaginationButton />
					</>
				)}
			</div>
		</div>
	);
}

export default App;

import React, { FC, useEffect, useState } from 'react';
import SearchComponent from './components/Filter/SearchComponent';
import Post from './components/Post/Post';
import { fetchData } from './api/api';
import styles from './App.module.scss';
import { Button, Spin } from 'antd';

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

interface SearchParams {
	country: string;
	category: string;
	language: string;
}
interface AppProps {
	menuCategory: SearchParams;
	darkMode: boolean;
}

const App: FC<AppProps> = ({ menuCategory, darkMode }) => {
	const [postList, setPostList] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [firstLoading, setFirstLoading] = useState<boolean>(true);

	const [nextPageLink, setNextPageLink] = useState<string>('');
	const [searchParams, setSearchParams] = useState<SearchParams>({
		country: '',
		category: '',
		language: 'ru'
	});
	useEffect(() => {
		setFirstLoading(true);
		console.log(menuCategory);
		setSearchParams(menuCategory);
	}, [menuCategory]);

	useEffect(() => {
		setLoading(true);

		fetchData({ ...searchParams })
			.then(data => {
				setPostList(data.results);
				setNextPageLink(data.nextPage);
				setFirstLoading(false);
			})
			.catch(error => console.error('Error fetching data:', error))
			.finally(() => setLoading(false));
	}, [searchParams]);

	const handleSearch = async (selectedValues: SearchParams) => {
		try {
			setFirstLoading(true);
			setLoading(true);
			setSearchParams(selectedValues);
		} catch (error) {
			console.error('Error fetching data:', error);
			setLoading(false);
		}
	};

	const downloadMorePosts = async (pageLink: string) => {
		try {
			setLoading(true);
			fetchData({ ...searchParams, page: pageLink })
				.then(data => {
					setPostList(prevArray => [...prevArray, ...data.results]);
					setNextPageLink(data.nextPage);
				})
				.catch(error => console.error('Error fetching data:', error))
				.finally(() => setLoading(false));
		} catch (error) {
			console.error('Error fetching data:', error);
			setLoading(false);
		}
	};

	
	return (
		<div className={styles.main}>
			<SearchComponent onSearch={handleSearch} darkMode={darkMode} />
			<div className={styles.posts}>
				{firstLoading ? (
					loading ? (
						<Spin className={styles.loader} size='large' />
					) : (
						<>
							{postList.map((post, index) => (
								<Post key={index} {...post} darkMode={darkMode}/>
							))}
						</>
					)
				) : (
					<>
						{postList.map((post, index) => (
							<Post key={index} {...post} darkMode={darkMode} />
						))}
						{loading && (
							<Spin className={styles.loader} size='large' />
						)}
					</>
				)}

				{!loading && nextPageLink && (
					<div className={styles.downloadMoreButton}>
						<Button onClick={() => downloadMorePosts(nextPageLink)}>
							Download more
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;

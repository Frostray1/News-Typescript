import { FC } from 'react';
import styles from './Post.module.scss';

interface PropsPost {
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

const Post: FC<PropsPost> = ({
	category,
	content,
	creator,
	description,
	link,
	title,
	keywords
}) => {
	return (
		<div className={styles.post}>
			<a href={link}>
				<h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
			</a>
			<h4>{creator ? `Author: ${creator}` : ''}</h4>
			<h3 className={styles.description}>{description}</h3>
			<p className={styles.content}>{content}</p>
			<div className={styles.keyWordsList}>
				{keywords?.map((word, index) => (
					<h5 key={index}>{word}</h5>
				))}
			</div>
		</div>
	);
};

export default Post;

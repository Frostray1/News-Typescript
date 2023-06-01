import { FC } from 'react';
import styles from './Post.module.scss';
import { Button } from 'antd';

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
	pubDate,
	image_url,
	content,
	creator,
	description,
	link,
	title,
	keywords
}) => {
	return (
		<div className={styles.post}>
			<img src={image_url} alt='' />
			<a href={link}>
				<h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
			</a>
			<h4>{creator ? `Author: ${creator}` : ''}</h4>
			<h4>{pubDate}</h4>
			<h3 className={styles.content}>{content ? '' : description}</h3>
			<p className={styles.content}>{content}</p>
			<div className={styles.keyWordsList}>
				{keywords?.map((word, index) => (
					<h5 key={index}>{word}</h5>
				))}
			</div>
			<a  className={styles.buttonLink} target = "_blank"  href={link}><Button>Читать полностью</Button></a>
		</div>
	);
};

export default Post;

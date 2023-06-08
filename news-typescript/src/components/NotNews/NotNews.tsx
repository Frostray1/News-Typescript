import { ConfigProvider, Result } from 'antd';
import styles from './NotNews.module.scss';
const NotNews = () => (
	<ConfigProvider
		theme={{
			components: {
				Result: {
					padding: 0,
					colorTextHeading: '#ff4d4f',
					colorTextDescription: '#ff4d4f'
				}
			}
		}}
	>
		<Result className={styles.result} status='404' />
	</ConfigProvider>
);

export default NotNews;

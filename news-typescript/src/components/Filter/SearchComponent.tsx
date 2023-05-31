import styles from './SearchComponent.module.scss';
import { items, category } from './SearhItems';
import DropdownComponent from '../Dropdown/DropdownComponent';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchComponent = () => {
	return (
		<div className={styles.SearchComponent}>
			<input type='text' />
			<DropdownComponent type='country' items={items} />
			<DropdownComponent type='category' items={category} />
			<Tooltip title='search'>
				<Button
					type='primary'
					shape='circle'
					icon={<SearchOutlined />}
				/>
			</Tooltip>
		</div>
	);
};

export default SearchComponent;

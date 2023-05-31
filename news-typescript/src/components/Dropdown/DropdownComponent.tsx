import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import { FC, useState } from 'react';
import styles from './DropdownComponent.module.scss';

interface propsDropdownComponent {
	type: string;
	items: { label: string; key: string }[];
}

const DropdownComponent: FC<propsDropdownComponent> = ({ type, items }) => {
	const [selectedItem, setSelectedItem] = useState<string | null>(null);

	const handleMenuClick: MenuProps['onClick'] = e => {
		console.log('click', e);
		setSelectedItem(e.key)
		
	};

	const menuProps = {
		items,
		onClick: handleMenuClick
	};

	const activeItem = selectedItem ? items.find(item => item.key === selectedItem)?.label : type;
	return (
		<Dropdown
			menu={menuProps}
			overlayClassName={styles.overlay}
			className={styles.dropdown}
		>
			<Button>
				<Space>
					{activeItem}
					<DownOutlined />
				</Space>
			</Button>
		</Dropdown>
	);
};

export default DropdownComponent;

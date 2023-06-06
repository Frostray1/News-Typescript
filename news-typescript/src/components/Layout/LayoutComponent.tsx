import React, { ReactNode, useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PicLeftOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import styles from './LayoutComponent.module.scss';
import App from '../../App';
import { GiSportMedal } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';
import { MdOutlineFastfood } from 'react-icons/md';

const { Sider } = Layout;
interface LayoutComponentProps {
	children: ReactNode;
}

interface category {
	country: string;
	category: string;
	language: string;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(true);
	const [menuCategory, setMenuCategory] = useState<category>({
		country: '',
		category: '',
		language: ''
	});

	const handleMenuClick = (key: string) => {
		setMenuCategory({ country: '', category: key, language: '' });
	};

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				className={styles.menu}
			>
				<Menu
					className={styles.menuList}
					mode='inline'
					defaultSelectedKeys={['0']}
					items={[
						{
							key: '0',
							icon: collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							),
							label: collapsed ? 'Открыть меню' : 'Закрыть меню',
							onClick: () => setCollapsed(!collapsed)
						},
						{
							key: '1',
							icon: <BsNewspaper />,
							label: 'Top News',
							onClick: () => handleMenuClick('Top')
						},
						{
							key: '2',
							icon: <GiSportMedal />,
							label: 'Sport News',
							onClick: () => handleMenuClick('Sports')
						},
						{
							key: '3',
							icon: <MdOutlineFastfood />,
							label: 'Food News',
							onClick: () => handleMenuClick('Food')
						}
					]}
				/>
			</Sider>
			<Layout>
				<div className={styles.container}>
					<App menuCategory={menuCategory}/>
				</div>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;

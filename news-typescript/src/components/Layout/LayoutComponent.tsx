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
import {
	MdOutlineFastfood,
	MdDarkMode,
	MdOutlineDarkMode
} from 'react-icons/md';

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
	const [darkMode, setDarkMode] = useState(true);

	const [menuCategory, setMenuCategory] = useState<category>({
		country: '',
		category: '',
		language: ''
	});

	const handleMenuClick = (key: string) => {
		setMenuCategory({ country: '', category: key, language: '' });
	};

	const changeTheme = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Layout >
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				className={styles.menu}
			>
				<Menu
					className={!darkMode ? styles.darkMenuList : styles.menuList}
					mode='inline'
					theme={`${!darkMode ? 'dark' :"light"}`}
					defaultSelectedKeys={['0']}
					items={[
						{
							key: '0',
							icon: collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							),
							label: collapsed ? 'Open menu' : 'Close menu',
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
			<Layout className={!darkMode ? styles.layout : ''}>
				<div className={styles.container}>
					<App menuCategory={menuCategory} darkMode={darkMode} />
					<Button onClick={changeTheme} className={styles.darkMode}>
						{darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
					</Button>
				</div>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;

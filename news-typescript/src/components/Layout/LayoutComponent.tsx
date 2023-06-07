import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import styles from './LayoutComponent.module.scss';
import App from '../../App';
import { GiSportMedal } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';
import { BsNewspaper } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';



import {
	MdOutlineFastfood,
	MdDarkMode,
	MdOutlineDarkMode,
	MdBusiness,
	MdForest,
	MdOutlineHealthAndSafety,
	MdOutlineLocalPolice,
	MdOutlineScience
} from 'react-icons/md';
import { TbBrandFunimation } from 'react-icons/tb';




const { Sider } = Layout;

const LayoutComponent = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [darkMode, setDarkMode] = useState(true);

	const [menuCategory, setMenuCategory] = useState<string>('');

	// const handleMenuClick = (key: string) => {
	// 	setMenuCategory({ country: '', category: key, language: '' });
	// };

	const changeTheme = () => {
		setDarkMode(!darkMode);
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
					className={
						!darkMode ? styles.darkMenuList : styles.menuList
					}
					mode='inline'
					theme={`${!darkMode ? 'dark' : 'light'}`}
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
							label: 'Top',
							onClick: () => setMenuCategory('Top')
						},
						{
							key: '2',
							icon: <GiSportMedal />,
							label: 'Sport',
							onClick: () => setMenuCategory('Sports')
						},
						{
							key: '3',
							icon: <MdOutlineFastfood />,
							label: 'Food',
							onClick: () => setMenuCategory('Food')
						},
						{
							key: '4',
							icon: <MdBusiness />,
							label: 'Business',
							onClick: () => setMenuCategory('Business')
						},
						{
							key: '5',
							icon: <TbBrandFunimation />,
							label: 'Entertainment',
							onClick: () => setMenuCategory('Entertainment')
						},
						{
							key: '6',
							icon: <MdForest />,
							label: 'Environment',
							onClick: () => setMenuCategory('Environment')
						},
						{
							key: '7',
							icon: <MdOutlineHealthAndSafety />,
							label: 'Health',
							onClick: () => setMenuCategory('Health')
						},
						{
							key: '8',
							icon: <MdOutlineLocalPolice />,
							label: 'Politics',
							onClick: () => setMenuCategory('Politics')
						},
						{
							key: '9',
							icon: <MdOutlineScience />,
							label: 'Science',
							onClick: () => setMenuCategory('Science')
						},
						{
							key: '10',
							icon: <GrTechnology />,
							label: 'Technology',
							onClick: () => setMenuCategory('Technology')
						},
						{
							key: '11',
							icon: <BiWorld />,
							label: 'World',
							onClick: () => setMenuCategory('World')
						},
						
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

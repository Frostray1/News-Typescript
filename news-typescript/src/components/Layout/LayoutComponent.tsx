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
import {GiSportMedal} from 'react-icons/gi'
import {BsNewspaper} from 'react-icons/bs'
import {MdOutlineFastfood} from 'react-icons/md'





const { Sider } = Layout;
interface LayoutComponentProps {
	children: ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(true);





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
							label: 'Top News'
						},
						{
							key: '2',
							icon: <GiSportMedal/>,
							label: 'Sport News'
						},
						{
							key: '3',
							icon: <MdOutlineFastfood />,
							label: 'Food News'
						}
					]}
				/>
			</Sider>
			<Layout>
				<div className={styles.container}>
					<App />
				</div>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;

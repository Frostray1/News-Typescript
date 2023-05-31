import React, { ReactNode, useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import styles from './LayoutComponent.module.scss';

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
							icon: <UserOutlined />,
							label: 'Топ новостей'
						},
						{
							key: '2',
							icon: <VideoCameraOutlined />,
							label: 'Спортивные новости'
						},
						{
							key: '3',
							icon: <UploadOutlined />,
							label: 'Топ за месяц'
						}
					]}
				/>
			</Sider>
			<Layout>
        <div className={styles.container}>
				{children}
        </div>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;

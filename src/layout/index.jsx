import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Header, Content } = Layout;

const LayoutPage = (props) => {
	return (
		<Layout className={styles.layout_page}>
			<Header className={styles.layout_header}>
				Header
			</Header>
			<Content className={styles.layout_content}>
				{props.children}
			</Content>
		</Layout>
	)
};

export default LayoutPage;

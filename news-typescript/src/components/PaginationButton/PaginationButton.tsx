import { Button } from 'antd'
import React from 'react'
import styles from './PaginationButton.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const PaginationButton = () => {
  return (
    <div className={styles.paginationButtons}>
        <Button><LeftOutlined /></Button>
        <Button><RightOutlined /></Button>
    </div>
  )
}

export default PaginationButton
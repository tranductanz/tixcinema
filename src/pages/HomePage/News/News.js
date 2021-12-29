import React from 'react'
import { Tabs } from 'antd';
import './News.css';
import { NewsTop } from './NewsTop/NewsTop';
import { NewsBot } from './NewsBot/NewsBot';
import { ReviewTop } from './Review/ReviewTop/ReViewTop';
import { ReviewBot } from './Review/ReviewBot/ReviewBot';
import LoadingIcon from '../../../assets/Loading.gif'
const { TabPane } = Tabs;
export const News = () => {
    return (
        <Tabs animated tabBarStyle={{ color: 'black' }} className='news ' defaultActiveKey="1" centered>
            <TabPane tab={<div className='news-content text-2xl hover:text-red-600 active:text-red-600'>Điện Ảnh 24h</div>} key="1">
                <NewsTop />
                <NewsBot />
            </TabPane>
            <TabPane className='hover:text-red-600' tab={<div className='news-content text-2xl hover:text-red-600  active:text-red-600'>Review</div>} key="2">
                <ReviewTop />
                <ReviewBot />
            </TabPane>
            <TabPane tab={<div className='news-content text-2xl hover:text-red-600  active:text-red-600'>Khuyến mãi</div>} key="3">
                <img alt="" className='w-[150px] h-[150px] block mr-auto ml-auto mt-20 mb-20' src={LoadingIcon} />
            </TabPane>
        </Tabs>
    )
}

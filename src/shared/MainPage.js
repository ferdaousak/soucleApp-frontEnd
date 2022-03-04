import React, { useState } from 'react';
import { ProfileOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons/lib/icons';
import TableData from './TableData';
import { Tabs } from 'antd';


function MainPage(props)
{
    const [selectedTab, setSelectedTab] = useState(1);
    
    return (
        
            <Tabs defaultActiveKey={selectedTab} tabPosition="top" onChange={(key)=>setSelectedTab(key)}>
                <Tabs.TabPane
                    tab={
                        <span>
                        <ProfileOutlined />
                        {props.subTitleList[0]}
                        </span>
                    }
                    key="1"
                >
                    <TableData columns={props.columns} array={props.arrayData} />
                </Tabs.TabPane>
                <Tabs.TabPane style={{maxHeight:'70vh',overflow: 'auto'}}
                tab={
                    <span>
                    <UserAddOutlined />
                    {props.subTitleList[1]}
                    </span>
                }
                key="2"
                >
                    {props.addComponent}
                </Tabs.TabPane>

                <Tabs.TabPane tab={<span><SearchOutlined />{props.subTitleList[2]}</span>}
                        key="3">
                    {props.searchComponent}
                </Tabs.TabPane>
            </Tabs>
    );
}

export default MainPage;
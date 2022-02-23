import React from "react";
import { Layout, Menu} from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    FileOutlined,
    EditOutlined,
    ReadOutlined 
  } from '@ant-design/icons';
import './SideMenu.css';

const {Sider} = Layout;
const {SubMenu} = Menu;

function SideMenu() {
    return ( 
                <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                    Tableau de board
                    </Menu.Item>
                    <SubMenu key="sub" icon={<UserOutlined />} title="Administration">
                        <Menu.Item key="2" icon={<FileOutlined />}>Formation</Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />}>Enseignants</Menu.Item>
                        <Menu.Item key="4" icon={<ReadOutlined />}>UE</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>

     );
}

export default SideMenu;

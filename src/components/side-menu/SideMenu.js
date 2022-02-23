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
import { Link } from "react-router-dom";

const {Sider} = Layout;
const {SubMenu} = Menu;

function SideMenu() {
    return ( 
                <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <Link to="home" >Tableau de board</Link>
                    </Menu.Item>
                    <SubMenu key="sub" icon={<UserOutlined />} title="Administration">
                        <Menu.Item key="2" icon={<FileOutlined />}> <Link to="formations" > Formations </Link></Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />}> <Link to="enseignants" >Enseignants </Link> </Menu.Item>
                        <Menu.Item key="4" icon={<ReadOutlined />}> <Link to="ue" ></Link>UE</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>

     );
}

export default SideMenu;

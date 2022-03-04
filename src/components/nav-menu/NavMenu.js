import React from "react";
import { Layout, Menu} from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    FileOutlined,
    EditOutlined,
    ReadOutlined,
    ContactsOutlined 
  } from '@ant-design/icons';
import './NavMenu.css';
import { Link, useLocation } from "react-router-dom";

const {SubMenu} = Menu;



function SideMenu() {

    const path = useLocation();

    let selectedPath;
    if(path.pathname==='/')
        selectedPath ='1';
    if(path.pathname==='/formations')
        selectedPath ='2';
    if(path.pathname==='/enseignants')
        selectedPath ='3';
    if(path.pathname==='/candidats')
        selectedPath ='4';
    if(path.pathname==='/promotions')
        selectedPath ='5';
    return ( 
                <Layout.Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[selectedPath]} >
                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <Link to="/" >Tableau de board</Link>
                    </Menu.Item>
                    <SubMenu key="sub" icon={<UserOutlined />} title="Administration">
                        <Menu.Item key="2" icon={<FileOutlined />}> <Link to="formations" > Formations </Link></Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />}> <Link to="enseignants" >Enseignants </Link> </Menu.Item>
                        <Menu.Item key="4" icon={<ReadOutlined />}> <Link to="candidats" ></Link>Candidats</Menu.Item>
                        <Menu.Item key="5" icon={<ContactsOutlined />}> <Link to="promotions" ></Link>Promotions</Menu.Item>
                        
                    </SubMenu>
                </Menu>
                </Layout.Header>

     );
}

export default SideMenu;

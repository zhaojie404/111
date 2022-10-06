/*
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-09-29 16:03:14
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-10-03 09:38:39
 * @FilePath: \myapp(1)\src\pages\home\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './index.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    // VideoCameraOutlined,
    FrownOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {Outlet,Link} from 'react-router-dom'
const { Header, Sider, Content } = Layout;



const Home=()=>{
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    style={{
                        overflowY:'auto',
                        height:680
                    }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',//不知道
                            icon: <UserOutlined />,//图标
                            label: <Link to={"/home/notice"}>公告管理</Link>,//菜单名
                        },
                        {
                            key: '2',
                            icon: <FrownOutlined/>,
                            label: <Link to={"/home/student"}>学员管理</Link>,//菜单名
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label:<Link to={"/home/admin"}>用户管理</Link>,//菜单名
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {//菜单隐藏切换
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}
export default Home;
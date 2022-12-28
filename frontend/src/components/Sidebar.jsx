import { useState } from "react";
import {
  CodeSandboxOutlined,
  CodeOutlined,
  PoweroffOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined
} from '@ant-design/icons';

import { Layout, Breadcrumb, Menu } from "antd";

const { Content, Sider } = Layout;



const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (

      
      <Sider 
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint = 'sm'
        // collapsedWidth={0}
        style={{
          backdroundColor:'white',
          height: '100vh',
          position: 'fixed'
        }}
      > 
      <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={[ window.location.pathname ]}
          mode="inline"
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={[
              {label: 'Dashboard', key: '/', icon: <DashboardOutlined />},
              {label: 'Students', key: '/Students', icon: <TeamOutlined />},
              {label: 'Tutors', key: '/Tutors', icon: <CodeSandboxOutlined />},
              {label: 'Packages', key: '/Packages', icon: <CodeOutlined />},
              {label: 'Profile', key: '/Profile', icon: <UserOutlined />},
              {label: 'Logout', key: '/Logout', icon: <PoweroffOutlined />, danger: true},
          ]}
        />
      </Sider>
  );
};

export default Sidebar;

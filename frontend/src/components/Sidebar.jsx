import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Layout, Breadcrumb, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;



const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="light"
          defaultSelectedKeys={[ window.location.pathname ]}
          mode="inline"
          items={[
              {label: 'Dashboard', key: '/'},
              {label: 'Students', key: '/Students'},
              {label: 'Tutors', key: '/Tutors'},
              {label: 'Packages', key: '/Packages'},
              {label: 'Logout', key: '/Logout'},
          ]}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
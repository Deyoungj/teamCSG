// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import MainHeader from "./components/Header";
// import { Layout, Breadcrumb } from "antd";
// const { Header,Content } = Layout;

// function App() {
//   return (
//      <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//        {/* <Header
//           className="site-layout-background"
//           style={{
//             padding: 0,
//           }}
//         /> */}
//         <MainHeader />
      
//       <Layout className="site-layout">
//         <Sidebar />
//       {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="logo" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider> */}
//       <Layout>
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           <div
//             className="site-layout-background"
//             style={{
//               padding: 24,
//               minHeight: 360,
//             }}
//           >
//             Bill is a cat.
//           </div>
//         </Content>
//         {/* <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2018 Created by Ant UED
//         </Footer> */}
//       </Layout>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
       <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
      
      <Layout className="site-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
       
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
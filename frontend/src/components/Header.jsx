import { Layout, Menu } from "antd";

const { Header } = Layout;

const TopHeader = () => {
    return (
       <Header
        className="header">
           <div className="logo" ></div>
           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={[
               {label: 'Dashboard',},
           ]} />
       

       </Header>
    );
}

export default Headers;
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/Header";
// import Card from "./components/Card"
import { Layout, Breadcrumb } from "antd";
const { Header,Content } = Layout;

function App() {
  return (
    <Layout
    style={{
      minHeight: '100vh',
    }}>
      <Sidebar />

      <Layout className="site-layout">
        <MainHeader />

        <Content
          style={{
            margin: '0 16px',
          }}
        ></Content>

      </Layout>

    </Layout>
  );
}

export default App;
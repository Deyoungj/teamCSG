import "./App.css";
import { Button } from 'antd';
import Sidebar from './components/Sidebar';
import { Layout, Breadcrumb} from "antd";

const { Header, Content, Footer} = Layout;


function App() {
  return (

      <Layout 
          style={{
            minHeight: '100vh',
          }}
        >

        <Sidebar />

      </Layout>
      

      
  );
}

export default App;

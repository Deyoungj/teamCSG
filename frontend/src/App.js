import "./App.css";
import Sidebar from './components/Sidebar';
import Headers from './components/Header'
import { Layout, Breadcrumb} from "antd";




function App() {
  return (

      <Layout 
          style={{
            minHeight: '100vh',
          }}
        >

        <Sidebar />

        <Layout className="site-layout">
            <Headers />

        </Layout>

      </Layout>
      

      
  );
}

export default App;

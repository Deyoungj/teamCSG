import "./App.css";
import Sidebar from './components/Sidebar';
import TopHeader from './components/Header'
import { Layout, Breadcrumb} from "antd";




function App() {
  return (
    <Layout>
      <TopHeader />
      <Layout>
          <Sidebar />
          <Layout>
            hellow
          </Layout>
      </Layout>
    </Layout>
    
      
      

      
  );
}

export default App;

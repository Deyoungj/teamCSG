import { Layout, Menu , Typography} from "antd";

const { Header } = Layout;

const {Title} = Typography;


const MainHeader = () => {
    return (
       <Header  className="site-layout-background" style={{
           backgroundColor: 'white',
           padding:10
       }}>
           
           <div className="logo">
            <Title level= {3}>TeamCSG</Title>
             {/* <img src={Image} alt="logo" width="30px" height="31px" /> */}<Title style={{float: 'right',}} level= {5}>example@mail.com</Title>
          </div>
          
       

       </Header>
    );
}

export default MainHeader;
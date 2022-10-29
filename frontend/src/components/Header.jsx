import { Layout, Menu , Typography} from "antd";

const { Header } = Layout;

const {Title} = Typography;


const TopHeader = () => {
    return (
       <Header  className="header" style={{
           backgroundColor: 'white',
           padding:10
       }}>
           <Title style={{float: 'right',}} level= {5}>example@mail.com</Title>
           <div className="logo">
            <Title level= {3}>TeamCSG</Title>
            {/* <img src={Image} alt="logo" width="30px" height="31px" /> */}
          </div>
          

           {/* <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={[
               {label: 'Dashboard',},
           ]} /> */}
       

       </Header>
    );
}

export default TopHeader;
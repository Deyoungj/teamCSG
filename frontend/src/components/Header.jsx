import { Layout, Menu , Typography} from "antd";

const { Header } = Layout;

const {Title} = Typography;


const MainHeader = () => {
    return (
       <Header
       style={{
         padding: 0,
         background: 'light',
       }}
     />
    );
}

export default MainHeader;
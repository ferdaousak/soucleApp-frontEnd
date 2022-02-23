
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/side-menu/SideMenu';
import { Layout } from 'antd';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Layout style={{height : '100vh'}}>
          <SideMenu />
          <Layout>
                  <Layout.Content style={{ margin: '24px 16px 0' }}>
                      <div className="content" style={{ padding: 24, height : '100vh'}}>
                      <Outlet />
                      </div>
                  </Layout.Content>
                  <Layout.Footer style={{ textAlign: 'center' }}>M2 DOSI 2022 - Soucle Applicatif</Layout.Footer>
          </Layout>
            
        </Layout>
    </div>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/side-menu/SideMenu';
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getAllCandidats } from './services/candidatService';
import { getAllFormations } from './services/formationService';
import { getAllPromotions } from './services/promotionService';
import { getAllEnseignants } from './services/enseignantsService';
import DataContext from './storage/dataContext';

function App() 
{
  const [state, setState] = useState({
    candidats : [],
    formations : [],
    promotions : [],
    enseignants : []
  });

  useEffect(() => {
    
    async function loadData()
    {
        const c = await getAllCandidats();
        const f = await getAllFormations();
        const p = await getAllPromotions();
        const e = await getAllEnseignants();
        console.log(e, p, f, c);
        
        setState({
          candidats :c.json ,
          formations : f.json,
          promotions : p.json,
          enseignants : e.json
        })
        
    }
    
    loadData()
    return () => {
        
    };
  }, []);
  

  

  return (
    <div className="App">
        <Layout style={{height : '100vh'}}>
          <SideMenu />
          <Layout>
            <Layout.Content style={{ margin: '24px 16px 0' }}>
                <div className="content" style={{ padding: 24, height : '100%'}}>
                  <DataContext.Provider value = {state}>
                      <Outlet />                       
                  </DataContext.Provider>
                </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>M2 DOSI 2022 - Socle Applicatif</Layout.Footer>
          </Layout>
            
        </Layout>
    </div>
  );
}

export default App;

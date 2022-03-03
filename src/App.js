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
    
    async function loadEnseignant()
    {
        
        const e = await getAllEnseignants();
        setState({
          ...state,
          enseignants : e.json
        })

        console.log("loaded enseignants" ,e)
        
    }

    async function loadCandidat()
    {
        
        const e = await getAllCandidats();
        e.error? console.log("error "+e) : 
        setState({
          ...state,
          candidats : e.json
        })
    }
    async function loadPromotion()
    {
        
        const e = await getAllPromotions();
        
        e.error? console.log("error",e) : 
        setState({
          ...state,
          promotions : e.json
        })
        
    }

    async function loadFormation()
    {
        
        const e = await getAllFormations();
        e.error? console.log("error",e) : 
        setState({
          ...state,
          formations : e.json
        })
        
    }

    
    loadEnseignant();
    loadCandidat();
    loadPromotion();
    loadFormation();
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

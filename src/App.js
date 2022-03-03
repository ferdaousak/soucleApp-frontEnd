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
  const [enseignants,setEnseignant] = useState([]);
  const [formations,setFormations] = useState([]);
  const [promotions,setPromotions] = useState([]);  
  const [candidats,setCandidats] = useState([]);


  useEffect(() =>
  {
    //CHARGER LES DONNES
    async function loadEnseignants()
    {
        const e = await getAllEnseignants();
        setEnseignant(e);
        console.log('liste des enseignants ',enseignants);
    }
    async function loadCandidats()
    {
        const c = await getAllCandidats();
        setCandidats(c);
        console.log('liste des Candidats ',candidats);
    }
    async function loadFormations()
    {
        const f = await getAllFormations();
        setFormations(f);
        console.log('liste des Formations ',formations);
    }
    async function loadPromotions()
    {
        const p = await getAllPromotions();
        setPromotions(p);
        console.log('liste des Promotions ',promotions);
    }
    

    loadEnseignants();
    loadFormations();
    loadPromotions();
    loadCandidats();
    return () => {
      
    };
  }, []);


  let state = {
    enseignants : enseignants,
    formations : formations,
    promotions : promotions,
    candidats : candidats
  }
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

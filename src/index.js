import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/home/home';
import Formation from './components/Formation/Formation';
import Enseignants from './components/Enseignants/Enseignants';
import Candidats from './components/Candidats/candidats';
import Promotions from './components/Promotions/promotions';

ReactDOM.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="formations" element={<Formation />} />
      <Route path="enseignants" element={<Enseignants />} />
      <Route path="candidats" element={<Candidats />} />
      <Route path="promotions" element={<Promotions />} />
      
    </Route>
  </Routes>
</BrowserRouter>,  
  document.getElementById('root')
);


reportWebVitals();

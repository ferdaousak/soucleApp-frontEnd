import React, { useContext } from 'react';
import { Alert, Table } from 'antd';
import { Link } from 'react-router-dom';
import DataContext from '../../storage/dataContext';
import MainPage from '../../shared/MainPage';
import AddCandidat from './addCandidat';
import ChercherCandidat from './chercherCandidat';

const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom'
    },
    {
        title: 'Prenom',
        dataIndex: 'prenom',
        key: 'prenom'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Nationalite',
        dataIndex: 'nationalite',
        key: 'nationalite'
    },
    {
        title: 'Universite Origine',
        dataIndex: 'universiteOrigine',
        key: 'universiteOrigine'
    },
    {
        title: 'Promotion',
        dataIndex: 'promotion',
        key: 'promotion',
        render : promotion => <Link to="/promotions">{promotion.siglePromotion}</Link>
    }

]
function Candidats() {

    const {candidats} = useContext(DataContext);
        
    return (
        <>
        <MainPage 
            columns={columns}
            subTitleList={["Liste des Candidats","Ajouter Un Candidat","Chercher un Candidat"]}
            arrayData={candidats}
            addComponent={<AddCandidat />} 
            searchComponent={<ChercherCandidat />}
            />
        </>
    );
}

export default Candidats;   
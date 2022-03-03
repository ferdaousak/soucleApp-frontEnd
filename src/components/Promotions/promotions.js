import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../storage/dataContext';
import MainPage from '../../shared/MainPage';
import AddPromotion from './addPromotion';
import ChercherPromotion from './chercherPromotion';


const columns = [
    {
        title: 'Sigle Promotion',
        dataIndex: 'siglePromotion',
        key: 'siglePromotion'
    },
    {
        title: 'Formation',
        dataIndex: 'formation',
        key: 'formation',
        render : formation => <Link to="/formations">{formation.codeFormation}</Link>
    },
    {
        title: 'Année Universitaire',
        dataIndex: 'id',
        key: 'id',
        render : id => <p>{id.anneeUniversitaire}</p>
    },
    {
        title: 'Nom enseignants',
        dataIndex: 'enseignant',
        key: 'enseignant',
        render : enseignant => <Link to="/enseignants">{enseignant.nom}</Link>
    },
    {
        title: 'Nombre Max Etudiant',
        dataIndex: 'nbMaxEtudiant',
        key: 'nbMaxEtudiant'
    },
    {
        title: 'Date entree',
        dataIndex: 'dateRentree',
        key: 'dateRentree'
    }
]
function Promotions() {

    const {promotions} = useContext(DataContext);
        
    return (
        <>
        <MainPage
            columns={columns}
            subTitleList={["Liste des Promotions","Ajouter Un Promotion","Chercher un Promotion"]}
            arrayData={promotions}
            addComponent={<AddPromotion />} 
            searchComponent={<ChercherPromotion />}
            />
        </>
    );
}

export default Promotions;
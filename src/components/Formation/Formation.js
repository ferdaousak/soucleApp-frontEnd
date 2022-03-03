import React, { useContext } from 'react';
import DataContext from '../../storage/dataContext';
import MainPage from '../../shared/MainPage';
import AddFormation from './addFormation';
import ChercherFormation from './chercherFormation';


const columns = [
    {
      title: 'Code de formation',
      dataIndex: 'codeFormation',
      key: 'codeFormation'
    },
    {
        title: 'Diplome',
        dataIndex: 'diplome',
        key: 'diplome'
    },
    {
        title: 'Nom de formation',
        dataIndex: 'nomFormation',
        key: 'nomFormation'
    },
    {
        title: 'Debut Accreditation',
        dataIndex: 'debutAccreditation',
        key: 'debutAccreditation'
    }

]
function Formation() {

    const {formations} = useContext(DataContext);
        
    return (
        <>
        <MainPage 
            columns={columns}
            subTitleList={["Liste des Formations","Ajouter Un Formation","Chercher un Formation"]}
            arrayData={formations}
            addComponent={<AddFormation />} 
            searchComponent={<ChercherFormation />}
            />
        </>
    );
    
}

export default Formation;
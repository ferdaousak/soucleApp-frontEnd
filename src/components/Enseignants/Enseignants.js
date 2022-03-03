import React, { useContext} from 'react';
import DataContext from '../../storage/dataContext';
import AddEnseignant from './addEnseignant';
import ChercherEnseignant from './chercherEnseignants';
import MainPage from '../../shared/MainPage';

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
        title: 'Adresse',
        dataIndex: 'adresse',
        key: 'adresse'
    },
    {
        title: 'Email UBO',
        dataIndex: 'emailUbo',
        key: 'emailUbo'
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
        key: 'mobile'
    }

]
function Enseignants() {

    const {enseignants} = useContext(DataContext);
        
    return (
        <>
        <MainPage title="Enseignants"
            columns={columns}
            subTitleList={["Liste des Enseignants","Ajouter Un Enseignant","Chercher un Enseignant"]}
            arrayData={enseignants}
            addComponent={<AddEnseignant />} 
            searchComponent={<ChercherEnseignant />}
            />
        </>
    );
}

export default Enseignants;
import React, { useContext } from 'react';
import { Alert, Table } from 'antd';
import { Link } from 'react-router-dom';
import DataContext from '../../storage/dataContext';


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
        {
             promotions[0] && <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={promotions} />
        }
        {promotions.error && <Alert message = {promotions.status+'  '+promotions.error}
                                    description={promotions.message}
                                    type="error"
                                    showIcon>
            </Alert>}
        </>
     );
}

export default Promotions;
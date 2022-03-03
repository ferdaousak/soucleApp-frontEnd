import React, { useContext } from 'react';
import { Alert, Table } from 'antd';
import { Link } from 'react-router-dom';
import DataContext from '../../storage/dataContext';

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
        {
            candidats[0] && <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} 
            size='small' 
            columns={columns}
            dataSource={candidats} /> 
        }
        {candidats.error && <Alert message = {candidats.status+'  '+candidats.error}
            description={candidats.message}
            type="error"
            showIcon>
</Alert>}
        </>
        
     );
}

export default Candidats;   
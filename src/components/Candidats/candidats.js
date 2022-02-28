import React, { useContext } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import DataContext from '../../storage/dataContext';

function Candidats() {

    const {candidats} = useContext(DataContext);

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

    return ( 
        
        <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} 
                size='small' 
                columns={columns}
                dataSource={candidats} />
     );
}

export default Candidats;   
import React, { useContext} from 'react';
import { Table } from 'antd';
import DataContext from '../../storage/dataContext';

function Enseignants() {

    const {enseignants} = useContext(DataContext);
    
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

    return ( 
        
            <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={enseignants} />
        
     );
}

export default Enseignants;
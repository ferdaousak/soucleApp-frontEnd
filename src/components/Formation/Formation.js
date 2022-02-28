import React, { useContext } from 'react';
import { Table } from 'antd';
import DataContext from '../../storage/dataContext';

function Formation() {

    const {formations} = useContext(DataContext);

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

    return ( 
        
            <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={formations} />
        
     );
}

export default Formation;
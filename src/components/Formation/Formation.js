import React, { useContext } from 'react';
import { Alert, Table } from 'antd';
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
        
       <>
       {
           formations[0] && <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={formations} />
       }
       {formations.error && <Alert message = {formations.status+'  '+formations.error}
                                    description={formations.message}
                                    type="error"
                                    showIcon>
            </Alert>}
       </>
        
        
     );
}

export default Formation;
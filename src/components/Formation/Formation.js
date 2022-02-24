import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getAllFormations } from '../../services/formationService';

function Formation() {

    const [data, setData] = useState();


    useEffect(() => {
            async function loaddata()
            {
                const response = await getAllFormations();
                console.log(response);
                setData(response.json);
            }
        loaddata()
    
      return () => {
        
      }
    }, [])
    
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
        
            <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={data} />
        
     );
}

export default Formation;
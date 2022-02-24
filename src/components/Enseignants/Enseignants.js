import React, { useEffect, useState } from 'react';
import {getAllEnseignants} from './../../services/enseignantsService'
import { Pagination, Table } from 'antd';
import { Container } from 'react-bootstrap';

function Enseignants() {

    const [data, setData] = useState();


    useEffect(() => {
            async function loaddata()
            {
                const response = await getAllEnseignants();
                console.log(response);
                setData(response.json);
            }
        loaddata()
    
      return () => {
        
      }
    }, [])
    
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
        
            <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={data} />
        
     );
}

export default Enseignants;
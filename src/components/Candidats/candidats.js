import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getAllCandidats } from '../../services/candidatService';
import { Link } from 'react-router-dom';

function Candidats() {

    const [data, setData] = useState();


    useEffect(() => {
            async function loaddata()
            {
                const response = await getAllCandidats();
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
        
            <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={data} />
        
     );
}

export default Candidats;
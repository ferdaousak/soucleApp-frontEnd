import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getAllPromotions } from '../../services/promotionService';
import { Link } from 'react-router-dom';

function Promotions() {

    const [data, setData] = useState();


    useEffect(() => {
            async function loaddata()
            {
                const response = await getAllPromotions();
                console.log(response);
                setData(response.json);
            }
        loaddata()
    
      return () => {
        
      }
    }, [])
    
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

    return ( 
        
            <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={data} />
        
     );
}

export default Promotions;
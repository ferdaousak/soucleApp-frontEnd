import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';

import React, { useState } from 'react';
import { getFormation } from '../../services/formationService';
import {SearchOutlined} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';

function ChercherFormation() {

    const [formation, setFormation] = useState({});
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    

    const onSearch = (value,event) => {
        setLoading(true);
        const getformationByParam= async (param) =>
            {

                const response = await getFormation(param,event);
                setFormation(response);
                console.log("response : ",response);
                setLoading(false);
                setDone(true);

            }
            
            getformationByParam(value);
        }

    let content;

    const clearData = ()=>{
        setLoading(false);
        setDone(false);
      
    }

    if(loading)
    {
        content = <Skeleton active />
    }
    if(done && formation.nomFormation)
    {
        console.log(formation)
        content = <Descriptions title="Formation info" bordered>
        {Object.entries(formation).map(([key,value]) =>(
                <Descriptions.Item label={key} key={'id_'+key}>
                    {value}
                </Descriptions.Item>
        ))}
        
    </Descriptions>
    }
    if(!loading && !done)
    {
        content = <Alert message="donnée vide veillez chercher par nom ou code formation" type="success" showIcon> </Alert>
    }
   
    return (  

        <>
            <Space direction='vertical'>
                
                <Space direction='horizontal'>
                    <Search placeholder="Saisir nom de formation"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,1)}
                            style = {{width : 300}}
                            />
                    <Search placeholder="Saisir le code de formation"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,2)}
                            style = {{width : 300}}
                            />

                    <Button type="dashed" onClick={()=> clearData()} >Vider</Button>
                   
                </Space>
                {content}
            </Space>     
        </>
    );
}

export default ChercherFormation;
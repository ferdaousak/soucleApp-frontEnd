import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { getEnseignant } from '../../services/enseignantsService';
import {SearchOutlined} from '@ant-design/icons';

function ChercherEnseignant() {
    
    const [enseignant, setEnseignant] = useState({});
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    

    const onSearch = (value,event) => {
        setLoading(true);
        const getEnseignantByParam= async (param) =>
            {

                const response = await getEnseignant(param,event);
                setEnseignant(response.json);
                setLoading(false);
                setDone(true);

            }
            
            getEnseignantByParam(value);
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
    if(done && enseignant.nom)
    {
        content = <Descriptions title="Enseigant info" bordered>
        {Object.entries(enseignant).map(([key,value]) =>(
                <Descriptions.Item label={key} key={'id_'+key}>
                    {value}
                </Descriptions.Item>
        ))}
        
    </Descriptions>
    }
    if(!loading && !done)
    {
        content = <Alert message="donnée vide veillez chercher par nom, numero ou email UBO" type="success" showIcon> </Alert>
    }
   
    return (  

        <>
            <Space direction='vertical'>
                
                <Space direction='horizontal'>
                    <Search placeholder="Saisir email ubo de l'enseignant"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,1)}
                            style = {{width : 300}}
                            />
                    <Search placeholder="Saisir le nom de l'enseignant"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,2)}
                            style = {{width : 300}}
                            />

                    <Search placeholder="Saisir numero de l'enseignant"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,3)}
                            style = {{width : 300}}
                            />

                    <Button type="dashed" onClick={()=> clearData()} >Vider</Button>
                   
                </Space>
                {content}
            </Space>     
        </>
    );
}

export default ChercherEnseignant;
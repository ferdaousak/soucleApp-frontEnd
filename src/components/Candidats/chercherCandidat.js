import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCandidat } from '../../services/candidatService';
import {SearchOutlined} from '@ant-design/icons';

//fonction pour connaitre si il y a un objet dans query
const isObject = (obj) => 
{
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function ChercherCandidat() 
{
    const [candidat, setCandidat] = useState();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    

    const onSearch = (value,event) => 
    {
        setLoading(true);
        setDone(false);

        const getCandidatByParam= async (param) =>
        {
            
            const response = await getCandidat(param,event);
            setCandidat(response);
            console.log("response : ",response);
            setLoading(false);
            setDone(true);

        }
            
        getCandidatByParam(value);
    }

    let content;

    const clearData = ()=>
    {
        setLoading(false);
        setDone(false);
    }

    if(loading)
    {
        content = <Skeleton active />
    }
    else
    {
            if(!loading && !done)
            {
                content = <Alert message="donnée vide veillez chercher par nom, id ou universite" type="success" showIcon> </Alert>
            }    

            if(done)
            {
                if(candidat.nom)
                {
                    content = <Descriptions title="Candidat info" bordered>
                                {Object.entries(candidat).map(([key,value]) =>(
                                        isObject(value) ?
                                        <Descriptions.Item key={key} label={key}>
                                            {value.id.anneeUniversitaire && <Link to="/promotions">{(value.id.codeFormation + '-'+value.id.anneeUniversitaire)}</Link>}
                                        </Descriptions.Item>  
                                        : 
                                     <Descriptions.Item key={'id_'+key} label={key}>{value}</Descriptions.Item>  
                                ))}
                                
                                </Descriptions>
                }
                else if(candidat.error)
                {
                    content = <Alert
                                    message={candidat.error}
                                    description={candidat.message}
                                    type="error"
                                    showIcon/>
                }
                else 
                {
                    content = <Alert message="aucune donnée trouvé" banner />
                }
            
            }
    }
        
    return (
            <Space direction='vertical'>
                
                <Space direction='horizontal'>
                    <Search placeholder="Saisir universite de candidat"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,1)}
                            style = {{width : 300}}
                            />
                    <Search placeholder="Saisir nom candidat"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,2)}
                            style = {{width : 300}}
                            />
                    <Search placeholder="Saisir id candidat"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,3)}
                            style = {{width : 300}}
                            />

                    <Button type="dashed" onClick={()=> clearData()} >Vider</Button>
                   
                </Space>
                {content}
            </Space>     
        
    );
}

export default ChercherCandidat;
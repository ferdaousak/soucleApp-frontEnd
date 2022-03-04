import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { getPromotion } from '../../services/promotionService';
import {SearchOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

//fonction pour connaitre si il y a un objet dans query
const isObject = (obj) => 
{
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function ChercherPromotion() 
{
    const [promotion, setPromotion] = useState();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    

    const onSearch = (value,event) => 
    {
        setLoading(true);
        setDone(false);

        let param;
        if(event ===3)
        {
            const [code,annee] = value.trim().split('@');
            param = {
                codeFormation : code,
                anneeUniversitaire : annee
            }
        }
        else
        {
            param = value.trim();
        }

        const getPromotionByParam= async (param) =>
        {
            const response = await getPromotion(param,event)
            setPromotion(response);
            console.log("response : ",response);
            setLoading(false);
            setDone(true);

        }
            
        getPromotionByParam(param);
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
                content = <Alert message="donnée vide veillez chercher par sigle, lieu de rentree ou code formation" type="success" showIcon> </Alert>
            }    

            if(done)
            {
                if(promotion.siglePromotion)
                {
                    content = <Descriptions title="Promotion info" bordered>
                                {Object.entries(promotion).map(([key,value]) =>(
                                        isObject(value) ?
                                        <Descriptions.Item key={key} label={key}>
                                            {value.anneeUniversitaire ? (value.codeFormation + '-'+value.anneeUniversitaire)
                                                :  value.nomFormation ?  <Link to="/formations">{value.nomFormation}</Link>
                                                : <Link to="/enseignants">{value.nom + ' ' + value.prenom}</Link>
                                            }
                                        </Descriptions.Item>  
                                        : 
                                     <Descriptions.Item key={'id_'+key} label={key}>{value}</Descriptions.Item>  
                                ))}
                                
                            </Descriptions>
                }
                else if(promotion.error)
                {
                    content = <Alert
                                    message={promotion.error}
                                    description={promotion.message}
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
                    <Search placeholder="Saisir sigle de promotion"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,1)}
                            style = {{width : 300}}
                            />
                    <Search placeholder="Saisir lieu de rentree"
                            enterButton={<Button type="primary" icon={<SearchOutlined />}></Button>}
                            onSearch={(value) =>onSearch(value,2)}
                            style = {{width : 300}}
                            />
                    <Search placeholder="Saisir codeFormation@annee"
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
export default ChercherPromotion;
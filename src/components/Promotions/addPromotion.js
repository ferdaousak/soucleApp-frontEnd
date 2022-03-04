import { Button, Form, Input, message, Select } from 'antd';
import React, { useContext } from 'react';
import { addPromotion } from '../../services/promotionService';
import DataContext from '../../storage/dataContext';

const formItems = 
[
    "dateRentree",
    "anneeUniversitaire",
    "lieuRentree",
    "nbMaxEtudiant",
    "siglePromotion"
]
//enseignant et formation

function AddPromotion()
{
    const {enseignantsProf,formations} = useContext(DataContext);

   
    const onFinish = (value) =>
    {
        let promotion =
        {
            ...value,
            enseignant : enseignantsProf[value.enseignant],
            formation : formations[value.formation],
            id : {
                anneeUniversitaire: value.anneeUniversitaire,
                codeFormation: formations[value.formation].codeFormation
            }
        }
        console.log(value);
        async function addData(promotion)
        {
            const response = await addPromotion(promotion);
            console.log(response.json);

            message.success('promotion ajouter avec succes!')

        }
    
        addData(promotion)

    }
    
    return ( 

    <div style={{height:'70vh',overflow:'auto'}}>
         <Form  name="promotionForm"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}>


        {formItems.map((name,idx) => ( 
            
                <Form.Item      label={name}
                                name={name}
                                key={idx}
                                rules={[{ required: true, message: 'SVP saisie '+ name }]}>
                        <Input type={ name==='dateRentree' ? "date":
                                      name==='nbMaxEtudiant' ? "number" : "text" } />
                </Form.Item>
        ))}
            <Form.Item  name="enseignant" 
                        label="enseignant" 
                        >
            
                <Select placeholder="Choisir l'enseignant" 
                        allowClear >
                        {enseignantsProf.map((item,indx)=>(
                                <Select.Option key={indx} value={indx}>{item.nom +' '+ item.prenom}</Select.Option>
                        ))}
                    
                </Select>
            </Form.Item>

            <Form.Item  name="formation" 
                        label="formation"
                        >

                <Select placeholder="Choisir la formation" 
                        defaultValue=""
                        allowClear >
                        {formations.map((item,indx)=>(
                                <Select.Option key={indx} value={indx}>{item.codeFormation}</Select.Option>
                        ))}
                </Select>
            </Form.Item>

          <Form.Item  wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" >
                Submit
            </Button>
        </Form.Item>
    </Form>

    </div> 
    );
}

export default AddPromotion;
import { Button, Form, Input, message, Select } from 'antd';
import React, { useContext } from 'react';
import { addCandidat } from '../../services/candidatService';
import DataContext from '../../storage/dataContext';

const formItems = 
[
    "nom",
    "prenom",
    "noCandidat",
    "email",
    "nationalite",
    "universiteOrigine"
]
function AddCandidat() 
{
    const {promotions} = useContext(DataContext);

   
    const onFinish = (value) =>
    {
        let candidat =
        {   ...value,
            promotion : promotions[value.promotion],
            
        }
        console.log(value);
        async function addData(candidat)
        {
            const response = await addCandidat(candidat);
            console.log(response.json);

            message.success('candidat ajouter avec succes!')

        }
    
        addData(candidat)

    }
    
    return ( 

    <div style={{height:'70vh',overflow:'auto'}}>
         <Form  name="candidatForm"
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
                        <Input type= "text" />
                </Form.Item>
        ))}
            <Form.Item  name="promotion" 
                        label="promotion" 
                        >
            
                <Select placeholder="Choisir la promotion" 
                        allowClear >
                        {promotions.map((item,indx)=>(
                                <Select.Option key={indx} value={indx}>{item.id.codeFormation + ' - ' + item.id.anneeUniversitaire}</Select.Option>
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

export default AddCandidat;
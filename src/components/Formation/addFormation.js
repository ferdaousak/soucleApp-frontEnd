import { Button, Form, Input , message } from 'antd';
import React from 'react';
import { addFormations } from '../../services/formationService';

const formItems = [
    
    "codeFormation",//0
    "debutAccreditation",
    "diplome",//2
    "doubleDiplome",//3
    "finAccreditation",
    "n0Annee",
    "nomFormation"//6
  
]

function AddFormation() 
{
    const onFinish = (value) =>
    {
        console.log(value);
        async function addData(formation)
        {
            const response = await addFormations(formation);

            console.log(response.json);

            message.success('Formation ajouter avec succes!')

        }
    
        addData(value)

    }
    
    return ( 

    <div style={{height:'70vh',overflow:'auto'}}>
         <Form  name="formationForm"
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
                        <Input type={
                            (name==='debutAccreditation' || name==='finAccreditation') ? "date":
                            name==='n0Annee' ? "number" :
                            [0,2,3,6].includes(idx) ? "text" : "hidden"
                        } />
                </Form.Item>
        ))}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" >
                Submit
            </Button>
        </Form.Item>
    </Form>

    </div> 
    );
}

export default AddFormation;
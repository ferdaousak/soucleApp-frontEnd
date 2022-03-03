import React from 'react';
import { Form, Input, Button, message} from 'antd';
import { addEnseignants } from '../../services/enseignantsService';

const formItems = [
    
        "nom" ,
        "prenom",
        "adresse",
        "codePostal",
        "emailPerso",
        "emailUbo",
        "mobile",
        "pays" ,
        "sexe",
        "telephone",
        "type",
        "ville"
      
]
function AddEnseignant() {

    
    const onFinish = (value) =>
    {
        console.log(value);
        async function addData(enseignant)
        {
            const response = await addEnseignants(enseignant);

            console.log(response.json);

            message.success('Enseignant ajouter avec succes!')

        }
    
        addData(value)

    }
    
    return ( 

    <div style={{height:'70vh',overflow:'auto'}}>
         <Form  name="enseignantForm"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}>


        {formItems.map(name => ( 
            <Form.Item      label={name}
                            name={name}
                            rules={[{ required: true, message: 'SVP saisie '+ name }]}>
                    <Input />
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

export default AddEnseignant;

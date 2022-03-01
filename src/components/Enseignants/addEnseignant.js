import React, { useEffect, useState } from 'react';
import { Form, Input, Button} from 'antd';
import { addEnseignants } from '../../services/enseignantsService';

const formItems = [
    
        "nom" ,
        "prenom",
        "adresse",
        "codePostal",
        "emailPerso",
        "emailUbo",
        "mobile",
        "noEnseignant",
        "pays" ,
        "sexe",
        "telephone",
        "type",
        "ville"
      
]
function AddEnseignant() {

    const [enseignant, setEnseignant] = useState();

    useEffect(() => 
    {
      
        async function addData(enseignant)
        {
            const response = await addEnseignants(enseignant);

            console.log(response);

            setEnseignant(response.json);
        }
     
        return () => {
        
      }
    
    }, [])
    
    
    return ( 

    <div style={{height:'70vh',overflow:'auto'}}>
         <Form  name="enseignantForm"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                autoComplete="off">


        {formItems.map(name => ( 
            <Form.Item      label={name}
                            name={name}
                            rules={[{ required: true, message: 'SVP saisie '+ name }]}>
                    
                    {name ==="noEnseignant" ? <Input type ="number"/> : <Input /> }
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

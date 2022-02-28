import React from 'react';
import { Form, Input, Button} from 'antd';


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
    
    return ( 
    <>
         <Form  name="enseignantForm"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
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
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>

    </> 
    );
}

export default AddEnseignant;

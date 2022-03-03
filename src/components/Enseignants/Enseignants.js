import React, { useContext} from 'react';
import { Alert, Table, Tabs } from 'antd';
import DataContext from '../../storage/dataContext';
import AddEnseignant from './addEnseignant';
import ChercherEnseignant from './chercherEnseignants';

const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom'
    },
    {
        title: 'Prenom',
        dataIndex: 'prenom',
        key: 'prenom'
    },
    {
        title: 'Adresse',
        dataIndex: 'adresse',
        key: 'adresse'
    },
    {
        title: 'Email UBO',
        dataIndex: 'emailUbo',
        key: 'emailUbo'
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
        key: 'mobile'
    }

]
function Enseignants() {

    const {enseignants} = useContext(DataContext);

    return (
        <>
            <Tabs defaultActiveKey="1" >
                <Tabs.TabPane tab="Liste des enseignants" key="1">
                    {
                        enseignants[0] && <Table  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} size='small' columns={columns} dataSource={enseignants} />
                    }
                </Tabs.TabPane>
                <Tabs.TabPane tab="Ajouter Enseignant" key="2">
                    <AddEnseignant />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Chercher un Enseigant" key="3">
                    <ChercherEnseignant />
                </Tabs.TabPane>
            </Tabs>
            
              {enseignants.error && <Alert  message = {enseignants.status+'  '+enseignants.error}
                                            description={enseignants.message}
                                            type="error"
                                            showIcon>
                                    </Alert>}
        </>
            
          
     );
}

export default Enseignants;
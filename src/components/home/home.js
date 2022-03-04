import { Badge, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Meta from 'antd/lib/card/Meta';
import React, { useContext } from 'react';
import "./home.css"
import teacher from "./../../img/teacher.png";
import formation from "./../../img/Research paper-amico.png";
import students from "./../../img/students.png";
import promotions from "./../../img/class.png";
import { Link } from 'react-router-dom';
import DataContext from '../../storage/dataContext';


function HomePage(props) {

        const data = useContext(DataContext);

    return (  

        <div className='badges'>
            <Link to="enseignants">
                <Card hoverable 
                    cover= {<Badge count={data.enseignants.length} size="large" status='success'>
                    <Avatar src={teacher}  size={{lg:200, xl:200, xxl:300}} />
                </Badge>}  >
                <Meta className='title' title="Enseignants"  />
                </Card >
            </Link>

            <Link to = "promotions">
            
                <Card hoverable 
                    cover= {<Badge count={data.promotions.length} size="large" status='success'>
                    <Avatar src={promotions} size={{lg:200, xl:200, xxl:300}} />
                </Badge>}  >
                <Meta className='title' title="Promotions"  />
                </Card >
            </Link>

            <Link to="formations">
                
                <Card hoverable 
                    cover= {<Badge count={data.formations.length} size="large" status='success'>
                    <Avatar  src={formation}  size={{lg:200, xl:200, xxl:300}} />
                </Badge>}  >
                <Meta className='title' title="Formations"/> 
                    
                </Card >
            </Link>

            <Link to="candidats">
                <Card hoverable 
                    cover= {<Badge count={data.candidats.length} size="large" status='success'>
                    <Avatar src={students} size={{lg:200, xl:200, xxl:300}}  />
                </Badge>}  >
                <Meta className='title' title="Candidats"/>
                </Card >
            </Link>
        </div>
    );
}

export default HomePage;
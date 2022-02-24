import { Badge, Card, Image } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import "./home.css"
import teacher from "./../../img/teacher.png";
import formation from "./../../img/Research paper-amico.png";
import students from "./../../img/students.png";
import promotions from "./../../img/class.png";
import { Link } from 'react-router-dom';
function HomePage(propos) {
    return (  

        <div className='badges'>
            <Link to="enseignants">
                <Card hoverable 
                    cover= {<Badge count={5} size="large" status='warning'>
                    <Avatar src={<Image src={teacher} />} size={{xl : 200}} />
                </Badge>}  >
                <Meta className='title' title="Enseignants"  />
                </Card >
            </Link>

            <Link to = "promotions">
            
                <Card hoverable 
                    cover= {<Badge count={5} size="large" status='warning'>
                    <Avatar src={<Image src={promotions} />} size={{xl : 200}} />
                </Badge>}  >
                <Meta className='title' title="Promotions"  />
                </Card >
            </Link>

            <Link to="formations">
                
                <Card hoverable 
                    cover= {<Badge count={5} size="large" status='warning'>
                    <Avatar src={<Image src={formation} />} size={{xl : 200}} />
                </Badge>}  >
                <Meta className='title' title="Formations"/> 
                    
                </Card >
            </Link>

            <Link to="candidats">
                <Card hoverable 
                    cover= {<Badge count={5} size="large" status='warning'>
                    <Avatar src={<Image src={students} />} size={{xl : 200}} />
                </Badge>}  >
                <Meta className='title' title="Candidats"/>
                </Card >
            </Link>
        </div>
    );
}

export default HomePage;
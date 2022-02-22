import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      
        <Row>
          <Col sm={2} className='menu'>
            Menu
          </Col>
          <Col sm={10} className='content'>
            Content
            </Col>
        </Row>
      
    </div>
  );
}

export default App;

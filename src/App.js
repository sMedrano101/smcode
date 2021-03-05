import Header from "./components/Header";
import Body from "./components/Body";
import Latest from "./components/Latest";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, NavDropdown, Nav, Form, FormControl,Button} from 'react-bootstrap';


function App() {
  return (
    <div className="App">


      <Header/>
      
    <Container fluid="sm"> 
    <Row>
    <Col sm><Body/></Col>
    
  </Row>
  </Container>

 <Latest/>
    
    </div> 
  );
}

export default App;

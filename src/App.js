import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header/>
      
    <Container fluid="sm"> 
    <Row>
    <Col sm><Body/></Col>
    
  </Row>
  </Container>
    
    </div> 
  );
}

export default App;

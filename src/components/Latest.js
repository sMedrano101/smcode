import React from 'react';
import "./Latest.css"
import {Card, CardDeck,Container, Row, Col, Navbar, NavDropdown, Nav, Form, FormControl,Button} from 'react-bootstrap';

function Latest() {
    return (
        <div >
<div className="title">
<h1>Our Work</h1>
</div>
           <CardDeck>
  <Card>
    <Card.Img variant="top" src="images/livehappytravels.jpg" />
    <Card.Body>
      <Card.Title>Live Happy Travels</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/retro-store.png" />
    <Card.Body>
      <Card.Title>Retro Online Store</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    
        </div>
    )
}

export default Latest

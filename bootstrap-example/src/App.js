import './App.css';

//you need to import these elements to use them
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, } from "react-bootstrap";

//import bootstrap css styling
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-muted">
                    We'll sell your personal data as soon as we can!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password123" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>
          </Form>
          <br></br>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/100/50" />
            <Card.Body>
              <Card.Title>
                Card Example
            </Card.Title>
              <Card.Text>
                This is an example of react bootstrap cards
            </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success" >This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;

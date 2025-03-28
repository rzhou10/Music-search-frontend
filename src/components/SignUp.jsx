import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  if (localStorage.getItem("token")) {
    window.location.href = "/album-search";
  }

  const createAccount = () => {
    axios.post(`${process.env.REACT_APP_ROUTE}create-account`, { username, password }).then((result) => {
      if (result.status === 200) {
        window.location.href = "/login";
      }
    }).catch((e) => {
      setHasError(true);
      setErrorMessage(e.message);

      setTimeout(() => {
        setHasError(false);
        setErrorMessage('');
      }, 5000)
    })
  }

  return (
    <div>
      {hasError ? <p className="mb-2 error-message" >{errorMessage}</p> : null}
      <Container style={{ width: '35%' }}>
        <Form>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Username:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Password:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} />
            </Col>
          </Row>

        </Form>
      </Container>
      <Button onClick={(e) => {
        e.preventDefault();
        createAccount();
      }}>Create Account</Button>
    </div>
  )
}

export default SignUp

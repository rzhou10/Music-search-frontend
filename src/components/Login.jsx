import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';

function Collection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  if (localStorage.getItem("token")) {
    window.location.href = "/album-search";
  }

  const login = () => {
    axios.post("", { username, password }).then((result) => {
      localStorage.setItem("token", result.data.token);
      window.location.href = "/album-search";
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
        login();
      }}>Login</Button>
    </div>
  )
}

export default Collection

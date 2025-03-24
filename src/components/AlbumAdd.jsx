import { useState } from "react"
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

function AlbumAdd() {
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState('');

  const addAlbum = () => {
    axios.post('', {artist, album, image, year, genre}).then();
  }

  return (
    <div>
      <h1 className="mb-5">Add a new album here!</h1>
      <Container style={{width: '35%'}}>
        <Form>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Artist:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={artist} onChange={(e) => setArtist(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Album:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={album} onChange={(e) => setAlbum(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Image:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={image} onChange={(e) => setImage(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Year:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={year} onChange={(e) => setYear(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={3}>
              <Form.Label>Genre:</Form.Label>
            </Col>
            <Col>
              <Form.Control value={genre} onChange={(e) => setGenre(e.target.value)} />
            </Col>
          </Row>
        </Form>
      </Container>
      <Button onClick={(e) => {
        e.preventDefault();
        addAlbum();
      }}>Add Album</Button>
    </div>
  )
}

export default AlbumAdd

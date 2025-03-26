import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Collection() {
  const [albums, setAlbums] = useState([]);

  return (
    <Container>
      <Row>
        <h1>Filter</h1>
      </Row>
      <Row className="flex-wrap">
        {albums.map((a, index) => {
          return (
            <Col key={index} md={3}>
              <Image src={a.image}></Image>
              <div>{a.name}</div>
              <div>{a.artist}</div>
              <div>{a.year}</div>
              <div>{a.genre}</div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Collection

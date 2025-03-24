import { useState } from "react"
import { Container, Row, Col, Image } from "react-bootstrap";

function Collection() {
  const [albums, setAlbums] = useState([{image: "", name: "Example name", artist: "Example artist", year: 1000, genre: "Example genre"}, {image: "", name: "Example name", artist: "Example artist", year: 1000, genre: "Example genre"}]);

  return (
    <Container>
      <Row>
        {albums.map((a, index) => {
          return (
            <Col key={index}>
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

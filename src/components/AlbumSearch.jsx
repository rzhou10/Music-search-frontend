import { useEffect, useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import axios from 'axios';

function AlbumSearch() {
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_ROUTE}search`).then((result) => {
      setTotal(result.data.total);
      setResults(result.data.albums);
    });
  }, page)

  return (
    <div>
      <Container>
        <Row className="flex-wrap">
          {results.map((a, index) => {
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
      <Container>
        <Button onChange={() => setPage(page - 1)} disabled={page === 1}>Prev</Button>
        <Form.Control value={page} onChange={(e) => setPage(e.target.value)} />
        <Button onChange={() => setPage(page + 1)} disabled={page === Math.ceil(total / 25)}>Next</Button>
      </Container>
    </div>
  )
}

export default AlbumSearch

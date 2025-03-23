import { Navbar, Nav, Container } from 'react-bootstrap';

function Layout({ children }) {

  return (
    <div className='mt-0'>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link href="/search-albums">Search Albums</Nav.Link>
            <Nav.Link href="/add-albums">Add Albums</Nav.Link>
            <Nav.Link href="/collection">Collection</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {children}
    </div>
  )
}

export default Layout

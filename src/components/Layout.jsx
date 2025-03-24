import { Navbar, Nav, Container } from 'react-bootstrap';

function Layout({ children }) {

  return (
    <div className='mt-0'>
      <Navbar style={{background: 'greenyellow', position: 'fixed', top: '0', width: '100%'}}>
        <Container>
          <Nav style={{margin: 'auto'}}>
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

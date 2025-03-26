import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Layout({ children }) {

  const location = window.location.href.split('/').at(-1);

  if (location === '' || location === 'login') {
    return <>
    {children}
    </>
  }

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
      <Button style={{position: 'absolute', top: '17px', right: '10px'}} onClick={(e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.href = "/login";
      }}>Log Out</Button>
      {children}
    </div>
  )
}

export default Layout

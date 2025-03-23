import './App.css'
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Layout from './components/Layout';
import AlbumSearch from './components/AlbumSearch';
import AlbumAdd from './components/AlbumAdd';

const element = <Layout />;
const CollectionRoutes = () => 
 useRoutes(["/", "/collection"].map(path => ({path, element})));

function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {/* <CollectionRoutes /> */}
          <Route path={"/search-albums"} element={<AlbumSearch />} />
          <Route path={"/add-albums"} element={<AlbumAdd />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App

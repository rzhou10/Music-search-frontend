import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import AlbumSearch from './components/AlbumSearch';
import AlbumAdd from './components/AlbumAdd';
import Collection from './components/Collection';

function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Collection />} />
          <Route path={"/collection"} element={<Collection />} />
          <Route path={"/search-albums"} element={<AlbumSearch />} />
          <Route path={"/add-albums"} element={<AlbumAdd />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App

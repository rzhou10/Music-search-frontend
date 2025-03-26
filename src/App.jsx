import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import AlbumSearch from './components/AlbumSearch';
import AlbumInsert from './components/AlbumInsert';
import Collection from './components/Collection';
import Login from './components/Login';

function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/collection"} element={<Collection />} />
          <Route path={"/search-albums"} element={<AlbumSearch />} />
          <Route path={"/add-albums"} element={<AlbumInsert />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App

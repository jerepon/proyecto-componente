import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Artista from './Artista';
import InicioPagina from './paginas/InicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import ArtistasPagina from './paginas/ArtistasPagina';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
    <Menu />
    <div className="container pt-3">

    <Router>
    <Routes>
    <Route path='/' element={<InicioPagina/>}/>
    <Route path='/contacto' element={<ContactoPagina/>}/>
    <Route path='/artistas' element={<ArtistasPagina/>}/>
    </Routes>
    </Router>
    
   
      <h2 className="pt-5">Inicio</h2>
      <p className="pt-2">Bienvenidos a mi lista de artistas favoritos, aqui los almacenare para nunca olvidarlos</p>
      <Artista
       nombre='Dire Straits'
       img ="/img/direstraits.jfif"
        descripcion='Fue una banda de rock britanica formada en Londres en 1977 por Mark Knopfler y su hermano.' />
      <Artista 
      nombre='The Who'
      img="/img/thewho.jpg" 
      descripcion='The Who es una banda britanica de rock considerada un icono de la musica del siglo xx.'/>
      <Artista 
      nombre='Jack Johnson'
      img="/img/jackjohnson.jpg" 
      descripcion='Jack Jhonson es un cantantautor de folk rock,surfista,poeta y cineasta hawaiano. '/>

    </div>
    </>
  );
}

export default App;

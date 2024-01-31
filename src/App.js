import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom"

import MoviesList from "./components/MoviesList"
//import MovieItem from "./components/MovieItem";

import MainPage from "./pages/MainPage";
import NavBar from "./pages/NavBar";

import './App.css';
import MovieDetails from "./components/MovieDetails";
// useEffect
//takes two parameters: a callback function and an array of dependencies 
//if only with a callback function, then this will be run at every re-render
//useEffect(() => {}, []);
//^^with a empty array, this will run when the component appears the first time only//this is how it's done most of the time
// useEffect(() => {}, [a, b]);
//^^ run it when the component first appears and again if either a or b change since the last render 


function App() {
const [movies, setMovies] = useState([]); //cuz we know we're going to get an array
  useEffect(() => {
    //connect to the backend 
    const fetchData = async() => {
      const res = await fetch("http://localhost:4000/api/movies");
      const data = await res.json();
      console.log(data);
      //set the data to the state movies variable 
      setMovies(data);
    }
    fetchData();
  }, []);

  
  return (
    <div className="App">
     <h1>Movies Full Stack App</h1>
     <NavBar> </NavBar>
     <Routes>
        <Route path="/movies" element= { <MoviesList movies={movies}/> }/>
        <Route path="/" element = {<MainPage/>} />
        <Route path="/movies/:id" element = { <MovieDetails/> } />
     </Routes>

    </div>
  );
}

export default App;

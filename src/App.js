import { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList"

import './App.css';
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
     <MoviesList movies={movies}></MoviesList>
    </div>
  );
}

export default App;

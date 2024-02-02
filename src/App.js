import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import MainPage from "./pages/MainPage";
import NavBar from "./pages/NavBar";
// context
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  // useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {
      const res = await fetch("https://movies-fullstack-backend-f8tv.onrender.com/api/movies");
      const data = await res.json();
      console.log(data);
      // set the data to the state movies variable
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div>


        {
          user ? (
            <>
        <h1 style={{ color: "#e50914" }}>Movies FullStack App</h1>
        <NavBar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<MoviesList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
            </>
          ) : (
            <MainPage/>
          )
        }

      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
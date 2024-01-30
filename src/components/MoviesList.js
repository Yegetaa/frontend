import MovieItem from "./MovieItem";

function MoviesList({movies}) {
    return (
        <div>
            <h1>Movies List</h1>
            <div>
                {/* if movies is true then map over it  */}
                {movies && movies.map(movie => <MovieItem movie={movie} key={movie._id}> </MovieItem>)}
            </div>
        </div>
    )
}

export default MoviesList
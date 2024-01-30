

function MovieItem({movie}) {
    // so we don't have to do movies.title or movies.alt in the div
    const {title, poster} = movie;
    return(
        <div>
            <h3>{title}</h3>
            {poster ? (
        <img src={poster} alt={title} />
      ) : (
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg"
          alt=""
        />
      )}
        </div>
    )
}

export default MovieItem;
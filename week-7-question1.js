class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movieList) {
    let filteredList = [];
    for (let movie of movieList) {
      if (movie.rating === "PG") {
        filteredList.push(movie);
      }
    }
    return filteredList;
  }
}

const bond = new Movie("Casino Royale", "Eon Productions", "PG­13");

const movies = require("./data");
// Exercise 1: Get the array of all directors.

/* Ajuda: hauràs d'implementar un bucle.map que recorri tot l'array de pel·lícules, extraient només el camp director de cadascuna (no oblidis que cada pel·lícula és un objecte, que conté el camp que ens interessa "director").
 */

function getAllDirectors(array) {
  let result =  array.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(movies => movies.director  === director)

}

// Exercise 3: Calculate the average of the films of a given director.

    function moviesAverageOfDirector(array, director) {
        let moviesFromDirector = array.filter(movies => director  === movies.director)
        //console.log('moviesFromDirector: ', moviesFromDirector);
        let result = moviesFromDirector.reduce((acc, curr) => {return (acc + curr.score) }, 0);
        return parseFloat((result/moviesFromDirector.length).toFixed(2))
    }

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(array) {
  let orderAlph20 = array.map(movie => movie.title).sort().slice(0,20);    
  return orderAlph20

}

// Exercise 5: Order by year, ascending

/* Tout ce dont vous avez besoin est une deuxième fonction qui trie les films.

A cette occasion, vous devrez implémenter une fonction qui, recevant un tableau de films, renvoie un tableau de films classés par année.

Comme vous pouvez le constater, de nombreux films coïncident la même année. Pour commander ces films qui ont la même année, il faut le faire par ordre alphabétique du titre.
 */
function orderByYear(array) {
  let result = [...array].sort((a, b) => {

    if (a.year > b.year) {
        return 1;}
    if (a.year < b.year) {
        return -1;
      } 
      if (a.title > b.title) {
        return 1;}
    if (a.title < b.title) {
        return -1;
      } 
}); 
return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
    // filtrer les films qui ont la valeur de genre recherchée
    let filmsFiltres = [...array].filter(movie => movie.genre.includes(genre)&& (movie.score !== ""));
    
    // utiliser la méthode reduce() pour calculer la somme des scores des films filtrés
    let totalScore = filmsFiltres.reduce((total, film) => total + film.score, 0);
    
    // calculer la moyenne en divisant la somme par le nombre de films filtrés
    let avgScore = totalScore / filmsFiltres.length;

return avgScore
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let result = [...array].map((movies) => {
    let movieDuration = movies.duration;
    let indexHours = movieDuration.indexOf('h');
    //console.log('indexHours: ', indexHours);
    let indexMinutes = movieDuration.indexOf('min');
    //console.log('indexMinutes: ', indexMinutes);
    let hours = parseInt(movieDuration.slice(0, indexHours).trim());
    //console.log('hours: ', hours);
    let minutes = 0;
    if (indexMinutes !== -1) {
      minutes = parseInt(
        movieDuration.slice(indexHours + 1, indexMinutes).trim()
      );
    }

    let totalTime = hours * 60 + minutes;
    //console.log('total:', totalTime);
    return {...movies, duration: totalTime };
  });
  console.log(result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const searchedY =  [...array].filter((movie) => year === movie.year) ;
  searchedY.sort((a, b) => {  a > b});
  return [searchedY[0]]
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

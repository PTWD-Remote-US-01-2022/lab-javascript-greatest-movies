let movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// {
//   title: 'The Shawshank Redemption',
//   year: 1994,
//   director: 'Frank Darabont',
//   duration: '2h 22min',
//   genre: ['Crime', 'Drama'],
//   score: 9.3
// }
function getAllDirectors(arr) {
  let newArr = [...arr].map(function (movie) {
    return movie.director
  })
//[dirrectorName,....]
  let uniqueDirectors = []

  let filterArr = newArr.filter(function (director) {
    if (uniqueDirectors.indexOf(director) === -1) {
      uniqueDirectors.push(director)
    }
  })
  return uniqueDirectors

  //return [...arr].map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let copyOfMovies = [...movies];
  
  return copyOfMovies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama')!==-1).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // if(movies.length === 0) return 0

  let copyOfMovies = [...movies];

  return Number((copyOfMovies.reduce((totalScore, movie) => {
    // if(movie.score) return totalScore += movie.score
    // return totalScore
    return totalScore += movie.score || 0
  }, 0) / copyOfMovies.length).toFixed(2)) || 0
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let copyOfMovies = [...movies];
  
  let dramaMovies = copyOfMovies.filter(movie => movie.genre.indexOf('Drama') !== -1)
  
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyOfMovies = [...movies];

  return copyOfMovies.sort((a, b) => {
    // return a.year - b.year;
    if (a.year > b.year) return 1
    else if (b.year > a.year) return -1
    else {
      return a.title.localeCompare(b.title)
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let copyOfMovies = [...movies];

  return copyOfMovies.sort((a, b) => {
    return a.title.localeCompare(b.title)
  }).slice(0, 20).map(movie=>movie.title)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// {
//   title: 'The Shawshank Redemption',
//   year: 1994,
//   director: 'Frank Darabont',
//   duration: '2h 22min' -> 142,
//   genre: ['Crime', 'Drama'],
//   score: 9.3
// }

function turnHoursToMinutes(movies) {

  function getMin (nonParsedTime){
    let min = 0
    if (nonParsedTime[1]){
      nonParsedTime[1].includes('min')? min = parseInt(nonParsedTime[1]) : 0
    }else {
      nonParsedTime[0].includes('min')? min = parseInt(nonParsedTime[0]) : 0
    }
    return min
  }

  let newMovies = movies.map(movie => {
    let eachMovie = {...movie}
    let splittedTime = eachMovie.duration.split(' ')
    let hour = splittedTime[0].includes('h') ? parseInt(splittedTime[0]) : 0
    let totalMin = getMin(splittedTime)
    let totalTime = (hour * 60) + totalMin
    eachMovie.duration = totalTime
    return eachMovie
  })
  // console.log(newMovies)
  return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}


// let time = null

// let splittedTime = time.split(' ')

// let hour = splittedTime[0].includes('h')? parseInt(splittedTime[0]) : 0


// function getMin (nonParsedTime){
//   let min = 0
//   if (nonParsedTime[1]){
//     nonParsedTime[1].includes('min')? min = parseInt(nonParsedTime[1]) : 0
//   }else {
//     nonParsedTime[0].includes('min')? min = parseInt(nonParsedTime[0]) : 0
//   }
//   return min
// }

// let totalMin = getMin(splittedTime)

// let totalTime = (hour * 60) + totalMin

// console.log(splittedTime)
// console.log(hour)
// console.log(totalMin)
// console.log(totalTime)


// console.log(`ParseInt:`,parseInt('1h'))

// let arr1 = [1,2,3]
// let arr2 = [...arr1] //1 2 3 
// console.log(arr2)
// arr2.push(4)
// console.log(`Arr1:`,arr1)
// console.log(`Arr2:`,arr2)
// console.log(...arr)
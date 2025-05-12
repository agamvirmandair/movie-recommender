import data from "./data.js";


//Action: 28
//Drama: 18
//Comedy: 35
//Horror 27

async function queryAPI(search) {
    //Accepts a string search as paraameter and prints a log of movie information for the matching genre"
    const movieID = findID(search)
    const x = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b26a995f96e78c547f2ea9f65e9c4b8c&with_genres=${movieID}`)
    const body = await x.json();
    console.log('start')
    let l_movies = body.results

    const l2 = [];
    for (const element of l_movies) {
        let l3 = []
        l3.push(element.title)
        l3.push(element.poster_path)
        l3.push(element.overview)
        l2.push(l3)
    }
        


    const l4 = [];
    while (l4.length < 10) {
        const rand = Math.floor(Math.random() * (l2.length -1)) ; 
        if (!l4.includes(l2[rand])) {
            l4.push(l2[rand]); // Add the random number to l4 if it's not already in the array
        }
    }

    return l4
}

function findID(search) {
    for (let genre of data.genres){
        if (genre.name == search) {
            return genre.id
        }
    }
}

function findMostFrequentString(strings) {
    const stringCount = new Map();
  
    // Count the occurrences of each string
    for (const str of strings) {
      if (stringCount.has(str)) {
        stringCount.set(str, stringCount.get(str) + 1);
      } else {
        stringCount.set(str, 1);
      }
    }
  
    let mostFrequentStrings = [];
    let maxCount = 0;
  
    for (const [str, count] of stringCount) {
      if (count > maxCount) {
        mostFrequentStrings = [str];
        maxCount = count;
      } else if (count === maxCount) {
        mostFrequentStrings.push(str);
      }
    }
  
    return mostFrequentStrings[0]
  }

export default async function allInOne(responses) {
    let genre = findMostFrequentString(responses)
    let movies_info = await queryAPI(genre)
    return movies_info
}


// console.log(await allInOne(['Action','Comedy','Comedy', 'Horror', 'Horror', 'Horror']))
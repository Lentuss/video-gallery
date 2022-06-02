// import axios from "axios";

// const API_KEY = "27641308-8655ee82f3657fe3b5b399be2";
// const URL = "https://pixabay.com/api/videos/";

// export async function searchVideo(query, page) {
//     const options = `?key=${API_KEY}&q=${query}&page=${page}&per_page=40&video_type=all&safesearch=true`;
//     const search = await axios.get(`${URL}${options}`).then(({ data }) => data);
//     return search
// }

const API_KEY = "k_z5688t06";
const URL = "https://imdb-api.com/";

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export async function searchVideo(query) {
    return fetch(`https://imdb-api.com/en/API/Search/${API_KEY}/${query}`, requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


// {
//     "searchType": "Title",
//         "expression": "batman",
//         "results": [{ "id": "tt1877830", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg", "title": "The Batman", "description": "(2022)" },
//                     { "id": "tt0096895", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_Ratio0.7273_AL_.jpg", "title": "Batman", "description": "(1989)" }, { "id": "tt0059968", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_Ratio0.7727_AL_.jpg", "title": "Batman", "description": "(1966) (TV Series)" }, { "id": "tt0468569", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.7273_AL_.jpg", "title": "The Dark Knight", "description": "(2008) aka \"Batman - El caballero de la noche\"" }, { "id": "tt1345836", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_Ratio0.7273_AL_.jpg", "title": "The Dark Knight Rises", "description": "(2012) aka \"Batman: El caballero de la noche asciende\"" }, { "id": "tt0372784", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg", "title": "Batman Begins", "description": "(2005)" }, { "id": "tt15124208", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BYzg0ODIyNzUtYjk2NS00ZTViLTlhZmYtYWIyMmRiOWE4Y2MxXkEyXkFqcGdeQXVyMTIzOTg0NzAy._V1_Ratio1.9091_AL_.jpg", "title": "Batman Unburied", "description": "(2021) (Podcast Series)" }, { "id": "tt0112462", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg", "title": "Batman Forever", "description": "(1995)" }, { "id": "tt0118688", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_Ratio0.7273_AL_.jpg", "title": "Batman & Robin", "description": "(1997)" }, { "id": "tt0060153", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BODVjNjdlYTQtMWIwYy00MWIyLWI2ZmMtZWFhMTdjNjAzNGVlXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_Ratio0.7273_AL_.jpg", "title": "Batman", "description": "(1966)" }], "errorMessage": ""
// }
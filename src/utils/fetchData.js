export const moviesOptions = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids',
    params: {
      idsList: 'tt0001702,tt0001856,tt0001857'
    },
    headers: {
      'X-RapidAPI-Key': '4dade9d459msh409017e47e8f24bp1918d2jsn7f22fee3fbf2',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
//   const yy = [moviesOptions]
//   console.log(moviesOptions)

 
  export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data


}
const bodyPartsData = await fetchData('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', moviesOptions);

// const uu = [...bodyPartsData];

console.log(bodyPartsData.results)



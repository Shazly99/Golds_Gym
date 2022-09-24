export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae4650e45bmsh41dcd64ea80dd05p1cb4b9jsn50fbf1e75435',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  }; 
 

  export const fetchData = async (url, options) => {
    const respond = await fetch(url, options);
    const data = await respond.json();
  
    return data;
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae4650e45bmsh41dcd64ea80dd05p1cb4b9jsn50fbf1e75435',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
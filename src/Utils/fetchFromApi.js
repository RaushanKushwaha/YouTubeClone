import axios from "axios";
 const Base_URL = 'https://youtube-v31.p.rapidapi.com'
 const options = {
  params: {
    
    maxResults: '50',
    
  },
  headers: {
    'X-RapidAPI-Key': 'f513ed9cf9mshe0d217199ac1c23p1ca1e6jsncfc9b57bb595',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  export const fetchFromApi = async(url)=>{
   const {data} =  await axios.get(`${Base_URL}/${url}`,options);
   return data;
  }
  
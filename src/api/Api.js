// require("dotenv").config();
// console.log(process.env.REACT_APP_SECRET_KEY);
const API_KEY = process.env.REACT_APP_SECRET_KEY;


export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      // console.log("ERROR ", error);
    });
};

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
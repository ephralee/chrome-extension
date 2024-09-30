async function fetchData() {
  const res=await fetch('https://jsonplaceholder.typicode.com/users/1&2&3')
  .then(response => response.json())
  .then(json => console.log(json))
}
fetchData();

// Now, let’s break down the above code:

//Here we are using the async function called fetchData.
// The data is being fetched from the https://api.coronavirus.data.gov.uk/v1/data API.
// The JSON data is stored in a variable called record.
// The HTML content of td with ids date, areaName, latestBy and deathNew are updated by the corresponding values of API.

//
//C:\Users\Ephra\Documents\SWE\chrome-extension>node script.js
//[
  //{
    //rank: 1,
    //appid: 730,
    //concurrent_in_game: 993874,
   // peak_in_game: 1275540
 // },
  //{
  //  rank: 2,
  //  appid: 570,
   // concurrent_in_game: 540562,
   // peak_in_game: 603265
 // },
 // {
  //  rank: 3,
  //  appid: 2358720,
 //   concurrent_in_game: 467647,
  //  peak_in_game: 2223179
    


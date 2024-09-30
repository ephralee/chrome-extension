async function fetchData() {
  const res=await fetch ('https://api.steampowered.com/ISteamChartsService/GetGamesByConcurrentPlayers/v1/?key=4B0FA5ECE6CBF40868D231DBDEBE7022&?input_json={"data_request":{"include_appinfo"=true}}');
  // my steam web API key 4B0FA5ECE6CBF40868D231DBDEBE7022
  //http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=json
  // example - http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json
  const record=await res.json();

  // get all the ranked game data
  console.log(record.response.ranks.slice(0,3));
  

  // get the data for the top ranked game
  console.log("rank: " + record.response.ranks[0].rank);
  // console.log("appid: " + record.response.ranks[0].appid);
  // console.log("include_appinfo: " +record.response.ranks[0].include_appinfo);
  console.log("concurrent_in_game: " + record.response.ranks[0].concurrent_in_game);
  console.log("peak_in_game: " + record.response.ranks[0].peak_in_game);
}
fetchData();

//

below is from chat GPT : 
To use information from one API call to make a subsequent API call in JavaScript, you can use `async` and `await` for a more readable and manageable code structure. Here’s a step-by-step example of how to handle this with the Fetch API:

1. **Make the first API call.**
2. **Extract the necessary information from the response.**
3. **Use that information to make the second API call.**
4. **Process the result from the second API call.**

Here’s a sample code snippet to illustrate this process:

```javascript
async function fetchData() {
  try {
    // Make the first API call
    const response1 = await fetch('https://api.steampowered.com/ISteamChartsService/GetGamesByConcurrentPlayers/v1/?key=4B0FA5ECE6CBF40868D231DBDEBE7022&?input_json={"data_request":{"include_appinfo"=true}}');
    
    // Check if the response is OK (status in the range 200-299)
    if (!response1.ok) {
      throw new Error('First API call failed');
    }

    // Parse the JSON data from the first response
    const data1 = await response1.json();

    console.log(record.response.ranks.slice(0,3));
    
    // Extract the needed information from the first response
    const neededInfo = data1.appid; // Replace 'someField' with the actual field

    // Make the second API call using the extracted information
    const response2 = await fetch(`https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json?param=${neededInfo}`);
    // https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json
    
    // Check if the response is OK
    if (!response2.ok) {
      throw new Error('Second API call failed');
    }

    // Parse the JSON data from the second response
    const data2 = await response2.json();
    
    // Process the result from the second API call
    console.log(data2);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to execute the API calls
fetchData();
```

### Explanation:

1. **Fetching Data:**
   - `fetch('https://api.example.com/first-endpoint')` makes the first API call.
   - `await` pauses the execution until the `fetch` operation completes.

2. **Error Handling:**
   - `if (!response1.ok)` checks if the response status is not OK and throws an error if the request fails.

3. **Extract Data:**
   - `const data1 = await response1.json()` parses the JSON response.
   - `const neededInfo = data1.someField` extracts the required information from the JSON data.

4. **Second API Call:**
   - `fetch(`https://api.example.com/second-endpoint?param=${neededInfo}`)` makes the second API call using the information from the first call.
   - Similar error handling and JSON parsing are done for the second API call.

5. **Processing the Result:**
   - The result from the second API call is processed (e.g., logged to the console).

By using `async` and `await`, the code is more readable and easier to manage compared to using nested `.then()` calls. Make sure to handle errors appropriately to avoid unhandled promise rejections.

// Now, let’s break down the above code:

//Here we are using the async function called fetchData.
// The data is being fetched from the https://api.coronavirus.data.gov.uk/v1/data API.
// The JSON data is stored in a variable called record.
// The HTML content of td with ids date, areaName, latestBy and deathNew are updated by the corresponding values of API.

//type in terminal - cd C:\Users\Ephra\Documents\SWE\chrome-extension
//then type in terminal - node script.js
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
    


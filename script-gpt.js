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
    // 2nd API link is here - 
    
    https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json
    
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
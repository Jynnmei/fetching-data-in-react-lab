const API_KEY = "<YOUR_API_KEY_HERE>";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
// 🚨 Remember to replace <YOUR_API_KEY_HERE> with your actual API Key!
// https://swapi.info/api/starships

const index = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// show('New York'); <=== Remove this line!

export { index };

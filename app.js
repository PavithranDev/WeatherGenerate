const button = document.getElementById("button");
const place = document.getElementById("place");
const city = document.getElementById("city");
const weather_deg = document.getElementById("weather_deg");
let count = 0;

button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')
        .then(function (response) {
            button.textContent = "Next";
            place.textContent = `Country: ${response.data[count].country}`;
            city.textContent = `City: ${response.data[count].city}`;
            weather_deg.textContent = `Temperature: ${response.data[count].temperature}°C`;
            count++;

            // Reset count if it exceeds the data length
            if (count >= response.data.length) {
                count = 0;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};
import colors from "colors";

const city = process.argv[2] || "Berlin";
const apiKey = process.env.KEY;

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to load");
    }
    return res.json();
  })
  .then((data) => {
    console.clear();
    const city = data.name;
    const temperatur = data.main.temp;
    const description = data.weather[0].description;

    console.log(colors.rainbow(`@@@@@@@@@@@@@@@@@@@`));
    console.log(colors.magenta(`@ WETTERPROGRAMM @`));
    console.log(colors.rainbow(`@@@@@@@@@@@@@@@@@@@`));
    console.log("⭐");
    console.log(colors.white(`Es ist jetzt ${temperatur}°C in ${city}`));
    console.log(colors.white(`Die aktuellen Wetterbedingungen sind: ${description}`));
    console.log("⭐");
  });

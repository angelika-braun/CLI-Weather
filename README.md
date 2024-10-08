# Weather CLI

Get the current weather report - straight from your terminal!

## What You Will Do

You will write a CLI application that uses an external API to fetch weather information.

The user will provide a city name when starting the program. Your program must use this city name in its request and display the results in the terminal.

### Example

###### Command

```bash
$ node weather.js manchester
```

###### Response

```bash
@@@@@@@@@@@@@@@@@@@
@ WEATHER PROGRAM @
@@@@@@@@@@@@@@@@@@@

It is currently 15.25°C in Manchester.

The current weather conditions are: scattered clouds.
```

## Tasks

### Task 1 - Obtain an API Key

1. Sign up for this free API:

   - [OpenWeatherMap API](https://openweathermap.org/)

2. Note down your API key; you will need it later.
3. Read the API documentation to understand how to use it.

### Task 2 - Set Up the Project

1. Initialize `npm` with the command `npm init -y`.
2. Create a file named "weather.js".

### Task 3 - The API Key

1. Create a `.env` file.
2. Store your API key in this file.

   ###### Example

   ```Text
   KEY=32476f984jf83jf9fdksu32928475
   ```

3. Create a `.gitignore` file and add `.env` to it.

### Task 4 - Make the Request

Within `weather.js`:

1. Read the city input from the user.
   > Tip: You can use `process.argv`.
2. Read your API key from the `.env` file.
3. Use `fetch` to send the request (assuming you're using a current version of Node).

### Task 5 - Output the Results

Read the data returned from your API and display:

- The name of the city
- The current temperature
- The current weather conditions
- Anything else you want to add

> Tip: You might also consider using the [colors.js](https://github.com/Marak/colors.js) library to make your output look fantastic! 🤩

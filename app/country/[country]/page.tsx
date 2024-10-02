// app/country/[country]/page.tsx
import { notFound } from 'next/navigation';

// Helper function to fetch weather data
async function fetchWeatherData(city) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

const CountryPage = async ({ params }) => {
  const { country } = params;

  // Static data for countries
  const countries = {
    pakistan: {
      population: '220 million',
      capital: 'Islamabad',
    },
    india: {
      population: '1.3 billion',
      capital: 'New Delhi',
    },
    bangladesh: {
      population: '160 million',
      capital: 'Dhaka',
    },
    china: {
      population: '1.4 billion',
      capital: 'Beijing',
    },
  };

  const countryData = countries[country];

  if (!countryData) {
    return notFound();
  }

  // Fetch weather data for the country's capital
  const weatherData = await fetchWeatherData(countryData.capital);

  return (
    <div>
      <h1>{country.charAt(0).toUpperCase() + country.slice(1)}</h1>
      <p>Population: {countryData.population}</p>
      <p>Capital: {countryData.capital}</p>

      {weatherData ? (
        <div>
          <h2>Weather in {countryData.capital}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Weather data not available</p>
      )}
    </div>
  );
};

export default CountryPage;

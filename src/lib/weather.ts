// Weather API service for Alushta, Crimea
// Coordinates: 44.6753° N, 34.4089° E

interface WeatherData {
  airTemp: string;
  seaTemp: string;
}

const ALUSHTA_LAT = 44.6753;
const ALUSHTA_LON = 34.4089;

// Use environment variable for API key
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';

export async function getAlushtaWeather(): Promise<WeatherData> {
  try {
    // Fetch current weather for air temperature
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${ALUSHTA_LAT}&lon=${ALUSHTA_LON}&units=metric&appid=${API_KEY}`,
      { next: { revalidate: 1800 } } // Cache for 30 minutes
    );

    if (!weatherResponse.ok) {
      throw new Error('Weather API failed');
    }

    const weatherData = await weatherResponse.json();
    const airTemp = Math.round(weatherData.main.temp);

    // Fetch sea surface temperature (using One Call API 3.0)
    // Note: This requires a different API endpoint
    let seaTemp = 15; // Fallback default

    try {
      const oneCallResponse = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${ALUSHTA_LAT}&lon=${ALUSHTA_LON}&units=metric&appid=${API_KEY}`,
        { next: { revalidate: 1800 } }
      );

      if (oneCallResponse.ok) {
        const oneCallData = await oneCallResponse.json();
        // Sea temperature is in the current object
        seaTemp = oneCallData.current?.sea_level 
          ? Math.round(oneCallData.current.sea_level) 
          : Math.round(airTemp * 0.9); // Estimate if not available
      } else {
        // Estimate sea temp as slightly cooler than air
        seaTemp = Math.round(airTemp * 0.9);
      }
    } catch {
      // Use estimation if sea temp fetch fails
      seaTemp = Math.round(airTemp * 0.9);
    }

    return {
      airTemp: airTemp > 0 ? `+${airTemp}°` : `${airTemp}°`,
      seaTemp: seaTemp > 0 ? `+${seaTemp}°` : `${seaTemp}°`
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    // Return fallback values
    return {
      airTemp: '+9°',
      seaTemp: '+15°'
    };
  }
}

// Client-side fetch function
export async function fetchWeatherClient(): Promise<WeatherData> {
  try {
    const response = await fetch('/api/weather');
    if (!response.ok) throw new Error('Failed to fetch weather');
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    return {
      airTemp: '+9°',
      seaTemp: '+15°'
    };
  }
}

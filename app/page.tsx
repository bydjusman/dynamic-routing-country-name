import Link from 'next/link';
import "./globals.css";
// const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Home() {
  const countries = ['pakistan', 'india', 'bangladesh', 'china' ];

  return (
    <div>
      {/* <h1>★【çօմղէɾվ —͟͞͞★ɴᴀᴍᴇ ✓】★</h1> */}
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <Link href={`/country/${country}`}>
              {country.charAt(0).toUpperCase() + country.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// app/layout.tsx
import './globals.css';  // Global CSS import kar rahe hain

export const metadata = {
  title: 'Country and Weather Info',
  description: 'Get information about countries and their weather',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#1976d2', color: '#fff' }}>
            Country Info with Weather
          </h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

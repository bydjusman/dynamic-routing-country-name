import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>

        <header>
          <h1 style={{
            textAlign: 'center',
            padding: '5px', /* Padding reduced */
            backgroundColor: '#1976d2',
            color: '#fff',
            border: '2px solid #fff' /* Border added and reduced to 2px */
          }}>
            ★【çօմղէɾվ —͟͞͞★ɴᴀᴍᴇ ✓】★
          </h1>
        </header>

        {children}
      </body>
    </html>
  );
}

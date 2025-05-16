import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';
import { Roboto } from 'next/font/google';

// Load Roboto with default weight/style (you can customize it)
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // 400 = regular, 700 = bold
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: "Garin Curtis",
  description: "Portfolio of Garin Curtis",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={roboto.variable}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}


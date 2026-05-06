import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
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


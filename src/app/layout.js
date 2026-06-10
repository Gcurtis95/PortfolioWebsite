import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';

export const metadata = {
  title: "Garin Curtis",
  description: "Portfolio of Garin Curtis",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

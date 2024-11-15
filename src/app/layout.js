import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RG Software Solutions",
  description: "Modern Software Solutions for Modern Creative Agencies",
  keywords: "software company, software solutions, website development, app development, "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/rg-favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* <link rel="stylesheet" href="/assets/css/fontawesome.css" /> */}
        <link rel="stylesheet" href="/assets/css/templatemo-space-dynamic.css" />
        <link rel="stylesheet" href="/assets/css/animated.css" />
        <link rel="stylesheet" href="/assets/css/owl.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="/vendor/jquery/jquery.min.js" async></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" async></script>
        <script src="/assets/js/owl-carousel.js" async></script>
        <script src="/assets/js/animation.js" async></script>
        <script src="/assets/js/imagesloaded.js" async></script>
        <script src="/assets/js/templatemo-custom.js" async></script>
      </body>
    </html>
  );
}

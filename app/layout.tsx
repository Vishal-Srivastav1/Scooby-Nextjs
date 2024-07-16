import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Service from "./components/Services";
import PetCare from "./components/PetCare";
import ChooseUs from "./components/ChooseUs";
import ServicesOption from "./components/ServicesOption";
import Contact from "./components/Contact";
import Customer from "./components/Customer";
import Team from "./components/Team";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scooby",
  description: "Pet Care & Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Service/>
        <PetCare/>
        <ChooseUs/>
        <ServicesOption/>
        <Contact/>
        <Customer/>
        <Team/>
        <Blogs/>
        <Footer/>
        
        </body>
    </html>
  );
}

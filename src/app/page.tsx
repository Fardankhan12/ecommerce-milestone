///* eslint-disable react/no-unescaped-entities */
"use client"
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductFeed from "./components/ProductFeed";
import { useSelector } from "react-redux";



export default function Home() {
  const cart=useSelector((state:any)=> state.cart.cart);
  console.log(cart);
  return (
    <main className="">
     <Header/>
     <HeroBanner/>
     <ProductFeed/>
    </main>
  );
}

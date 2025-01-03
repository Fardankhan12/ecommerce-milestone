'use client'
import React, { useState, useEffect } from 'react';

// Define the Product type
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

// Fetch data function
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

function ProductFeed() {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">Products</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {products.map((item) => (
          <div key={item.id} className='bg-white p-4 rounded-md shadow-md hover:shadow-lg'>
            <img src={item.thumbnail} alt={item.title} className='h-40 w-full object-cover rounded-md' />
            <h3 className='text-lg font-semibold mt-2'>{item.title}</h3>
            <p className='text-gray-500 text-sm mt-1'>${item.price}</p>
            <button className='mt-3 w-full bg-green-500 text-white py-1 rounded-md hover:bg-green-600'>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductFeed;

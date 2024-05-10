"use client"

import React from 'react'

import { useRouter } from 'next/router';
import Image from 'next/image';
import { urlForImage } from "@/sanity/lib/image";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';


const MyHero = () => {
    const router = useRouter();
    const { id, title, summary, createdAT, subtitle } = router.query;
  
    return (

      <div>      
        <Providers>
        <Navbar />
      <div className='container flex flex-col mx-auto p-4 '>
        
        
        <h1 className='flex justify-center text-2xl font-bold'> {title}</h1>
        <p className='flex justify-center mt-2'> Created at: {createdAT}</p>
        <p className='text-xl my-8 font-bold'>Subtitle: {subtitle}</p>
        

        <p><span className='text-xl font-bold'>Summary:</span> {summary}</p>
        
        

      {/*   <Image
                            src={imageUrl}
                            alt={"title"}
                            width={500}
                            height={500}
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            priority={false}
                            quality={80}
                            placeholder={"empty"}
                          /> */}
 

              <Link href="/" 
                  className="w-24 mt-4 bg-black text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Home
              </Link>
        
      </div>
      </Providers>
      </div>
    );
  };
  
  export default MyHero;
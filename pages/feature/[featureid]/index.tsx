
"use client"

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Link from "next/link";
import { useRouter } from 'next/router';

function FeatureIndex() {

    const router = useRouter();
    const { id, title, summary,  createdAT, subtitle } = router.query;

  return (
    <div>

            <Providers>
            <Navbar />

            <Container>
                <div className="container flex flex-col mx-auto p-4">
                
                    <p className="flex justify-center text-2xl font-bold pt-4 "> {title}</p> 
                    <p className="pt-2 flex justify-center items-center">Created: {createdAT}</p>

                    <p className="pt-8 text-xl font-bold">Subtitle: {subtitle}</p>
                    

                    <p className="pt-4 "> {summary}</p>

                    <Link 
                        href="/" 
                        className="w-36 mt-4 bg-black text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold">
                        To Home 
                    </Link>
                    
        
                </div>                    
            </Container>
            </Providers>
        </div>

  )
}

export default FeatureIndex;

"use client"

import Container from "@/components/Container";
//import { Breadcrumb } from "@/components/ui/breadcrumb";
import { clsx } from 'clsx';
import { useRouter } from 'next/router';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { usePosts } from "@/hooks/usePosts";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";



    export default function Page() {
        const router = useRouter();
        const { slug, title, body, createdAT } = router.query;

       // console.log(slug, title, createdAT);

    
    return (
        <div>

          <Providers>
             <Navbar />
             <Container>
                <div className="container mx-auto p-4">
                
                <Breadcrumb className="mt-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/blog">Blogs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{slug}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                

                    <div className="flex flex-col">
                    <p className="flex justify-center text-2xl font-bold pt-8"> {title}</p> 
                    <p className="flex justify-center pt-2">Created: {createdAT}</p>                    
                    <br />
                
                    <p className="pt-8">{body}</p>
                    </div>
                </div>                    
             </Container>

        </Providers>
     </div>
       
      )
    };

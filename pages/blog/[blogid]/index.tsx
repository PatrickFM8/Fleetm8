
"use client"

import Container from "@/components/Container";
//import { Breadcrumb } from "@/components/ui/breadcrumb";
import { clsx } from 'clsx';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
//import { fetchPosts } from "@/lib/fetchPosts";
import { usePosts } from "@/hooks/usePosts";
//import BlockContent from '@sanity/block-content-to-react';


export default function Page({ searchParams }: { 
    searchParams: { 
        id: string,
        title: string,
        body: string,
        createdAT: string,
    
    } }) {

/*     // Parse the JSON string into an object
    const parsedObject = JSON.parse(searchParams.body);

    // Extract the text from the object
    const text = parsedObject.body[0].children[0].text;
    

    console.log(text); */

    const text = "Test text!";
    return (
        <div>

            
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
                            <BreadcrumbPage>{searchParams?.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                


                    <p className="mt-20">My Post: {searchParams?.id} </p>

                    <p className="pt-4">Created: {searchParams?.createdAT}</p>
                    <br />
                    <p className="text-2xl bold pt-4"> {searchParams?.title}</p>

                    <p className="pt-8">{text}</p>
                </div>                    
            </Container>


     </div>
       
      )
    };

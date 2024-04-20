
import { Button } from "./ui/button";
import Link from "next/link";

import Container from "./Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full  bg-black text-white py-4 flex items-center justify-between">
      <Container>
        <div className="flex w-full justify-between ">
          <div className="flex items-center">
            <Link href="/">
              <Logo className="float-left" />
            </Link>
          </div>

          <div className="">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/blog" 
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold">BLOGS
                </Link>
                {/* Add more links if needed */}
              </div>
          </div>

          <div>
            <Button variant="secondary" className="float-right">
              CTA BUTTON{" "} 
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

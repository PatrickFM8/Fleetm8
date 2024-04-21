import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import Container from "./Container";
import Logo from "./Logo";
import fetchNavitems from "@/lib/fetchNavitems";
import { Navitems } from "@/lib/sanityTypes";
import { useNavitems } from "@/hooks/useNavitems";

export const revalidate = 60;
interface navitemProps {
  navitems: Navitems[] | [];
}
const Navbar: React.FC<navitemProps> = ({ navitems }) => {
  return (
    <nav className="w-full  bg-black text-white py-4 flex items-center justify-between">
      <Container>
        <div className="flex w-full justify-between ">
          <div className="flex items-center">
            <Link href="/">
              <Logo className="float-left" />
            </Link>
          </div>

          <div className="flex-1 items-center">
            <div className="flex tems-center py-2 justify-center space-x-4">
              {navitems?.map((navitem) => (
                <Link
                  key={navitem?._id}
                  href={navitem?.url}
                  className="text-white hover:text-gray-300"
                >
                  {navitem?.title}
                </Link>
              ))}
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

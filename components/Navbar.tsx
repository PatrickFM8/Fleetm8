"use client"

import { Button } from "./ui/button";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { useNavitems } from "@/hooks/useNavitems";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ThemeButton from "./ThemeButton";
export const revalidate = 60;

const Navbar: React.FC = () => {
  const navitems = useNavitems();
  const targetRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const targetElement = targetRef.current;
    if (!targetElement) return;
    let tween: any = gsap.to(targetElement, {
      duration: 2,
      xPercent: 200,
      rotation: 360,
      ease: "back.inOut",
      paused: true,
      onComplete: () => tween.reverse(),
    });
    tween.play();
  }, []);

  return (
    <nav className="w-full  bg-black text-white py-4 flex items-center justify-between">
      <Container>
        <div className="flex w-full justify-between ">
          <div className="flex items-center">
            <Link ref={targetRef} href="/">
              <Logo className="float-left" />
            </Link>
          </div>

          <div className="flex-1 items-center">
            <div className="flex tems-center py-2 justify-center space-x-4">
              {navitems?.map((navitem) => (
                <Link
                  key={navitem?._id}
                  href={navitem?.url}
                  className="text-white text-2xl hover:text-gray-300"
                >
                  {navitem?.title}
                </Link>
              ))}
            </div>
          </div>
          <ThemeButton />

          <div>
            <Button variant="secondary" className="ml-8 float-right">
              Try Now{" "}
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

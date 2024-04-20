/**
 * Renders a container component with a specified width, maximum width, margin, border, and padding.
 *
 * @param {ContainerProps} props - The props object containing the children to be rendered inside the container.
 * @return {ReactElement} The rendered container component.
 */

"use client";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div
      className=" 
      w-full
      lg:max-w-[1000px]
       mx-auto
       border-none 
       sm:px-4 md:px-0
        "
    >
      {children}
    </div>
  );
};

export default Container;

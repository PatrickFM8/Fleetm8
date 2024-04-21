/**
 * Renders the logo component with the specified class name.
 *
 * @param {LogoProps} props - The props object containing the className.
 * @return {ReactElement} The rendered logo component.
 */

import Image from "next/image";
import logo from "../public/logo.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image
        quality={80}
        priority={false}
        placeholder={"empty"}
        alt="logo"
        src={logo}
        width={40}
        height={40}
      />
    </div>
  );
};

export default Logo;

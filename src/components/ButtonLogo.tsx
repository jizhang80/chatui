import Image from "next/image";

type ButtonLogoProps = {
  logo: string;
  cursor?: string;
};

export default function ButtonLogo({ logo, cursor = "" }: ButtonLogoProps) {
  return (
    <div className={`p-2 rounded-xl ${cursor} hover:bg-gray-200`}>
      <Image src={logo} alt="image" width="20" height="20" />
    </div>
  );
}

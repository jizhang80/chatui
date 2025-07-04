import Image from "next/image";

type MenuItemProps = {
  logo: string;
  name: string;
};

export default function MenuItem({ logo, name }: MenuItemProps) {
  return (
    <div className="flex p-2 hover:bg-gray-200 cursor-pointer rounded-xl flex-row">
      <div>
        <Image src={logo} alt="alt" width="18" height="18" />
      </div>
      <p className="ps-4">{name}</p>
    </div>
  );
}

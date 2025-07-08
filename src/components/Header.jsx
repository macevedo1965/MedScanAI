import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-blue-100 px-4">
      <div className="flex items-center justify-between w-full max-w-[1000px]">
        <Link
          href="/"
          className="cursor-pointer transition-all duration-200 w-full max-w-md"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/drugs-512x512.png"
              alt="logo-medscanai"
              width={32}
              height={32}
              className=""
            />
            <span className="text-red-700 font-extrabold">MedScanAI</span>
          </div>
        </Link>
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocJS5-u3OAG4IcCbMrKVY3XxMbXSnymtPR7WKyFdG-JiVJ-5V9SU=s96-c-rg-br100"
          alt="User"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;

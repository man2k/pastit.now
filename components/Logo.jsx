import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="text-mono mb-0">
      <label className=" font-mono text-4xl font-bold">
        <Link href="/">
          <Image
            src="/pastit-transparent.png"
            // loading="lazy"
            width={200}
            height={200}
            alt="Pastit.Now"
          />
        </Link>
      </label>
    </div>
  );
};

export default Logo;

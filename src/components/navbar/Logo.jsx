import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/quickstay.jpeg"
        alt="QuickStay Logo"
        width={150}
        height={150}
      />
    </Link>
  );
}

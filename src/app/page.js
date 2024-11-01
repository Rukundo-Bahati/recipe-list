import Image from "next/image";
import homeImage from "/public/rec.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Welcome to recipe app</h1>
      <Image src={homeImage} alt="Hom page image" width={500} />
      <Link
        href="/recipe-list" 
        className="hover:text-blue-500 hover:scale-[1.1] duration-200"
      >
        Explore More recipes
      </Link>
    </main>
  );
}

import { api } from '@/data/api'
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts() {
  const response = await api('/products/featured')

  const products = await response.json()

  return products
}

export default async function Home() {
  const products = await getFeaturedProducts()

  console.log(products)

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-5 rigth-5 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AB Grey</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className=" group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-5 rigth-5 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AB Blue</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className=" group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ia-p-devs.png"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-5 rigth-5 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AB Black</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}

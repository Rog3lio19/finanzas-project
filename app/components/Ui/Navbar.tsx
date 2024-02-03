'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'keep-react';

export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-700 p-8 flex flex-col gap-y-6 text-xl text-white h-[100vh] ">
        <Link href="/">
          <Image
            src={'/logo.png'}
            alt="logo de FinanzasProject"
            width={100}
            height={100}
            priority
          />
        </Link>
        <div className="flex flex-col gap-y-6 mt-10">
          <Link className="hover:underline transition" href="/">
            Inicio
          </Link>
          <Link className="hover:underline transition-all" href="/gastos-fijos">
            Gastos Fijos
          </Link>
        </div>
      </nav>
    </>
  );
};

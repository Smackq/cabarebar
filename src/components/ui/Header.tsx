'use client'
import Image from "next/image";
import { MenuItem } from "./MenuItem";
import { MENU } from "@/config/pages.config";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export function Header() {


  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
    };
  }, [isOpen]);


  return (
    <header className="max-w-5xl mx-auto w-full relative z-50 ">
      {/* Верхняя панель */}
      <div className="flex justify-between items-center gap-10 p-6   lg:border-b-2 border-red-800">
        <Link href={'/'}>
         <Image src='/images/main/headerLogo.png' alt="headerLogo" width={150} height={150}/>
        </Link>

        {/* Меню для больших экранов */}
        <div className="">
        <nav className="hidden lg:flex gap-10 justify-between items-center ">
          {MENU.map((item) => (
            
              <MenuItem key={item.href} name={item.name} href={item.href}  />
              
          ))}
          
        </nav>
        
      </div>

        {/* Телефон */}
        <div className="hidden lg:block text-white ">
          +7 (900) 636-13-22
        </div>

        {/* Бургер для мобилок */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Оверлей, чтобы закрывать панель при клике */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Выезжающее меню */}
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-[#121212] shadow-lg transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end items-center pt-5 pr-5">
          <button className="text-white text-3xl " onClick={() => setIsOpen(false)}>
            <HiOutlineX />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-3  text-md">
          {MENU.map((item) => (
            <MenuItem key={item.href} name={item.name} href={item.href}  />
          ))}
        </nav>

        <div className="p-3 text-white text-center ">
          +7 (900) 636-13-22
        </div>
         <div className="flex flex-row items-center justify-center gap-4">
  
  <div className="cursor-pointer">
    <Image src='/images/icons/vk.svg' alt="img" width={35} height={35}/>
  </div>
  <div className="cursor-pointer">
    <Image src='/images/icons/tg.svg' alt="img" width={35} height={35}/>
  </div>
</div>
      </div>
    </header>
  );
}

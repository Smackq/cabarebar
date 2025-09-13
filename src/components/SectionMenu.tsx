"use client"
import { MenuCard } from "./ui/MenuCard";
import { MENUDATA } from "@/data/menu.data";

import { useState, useEffect, useMemo } from "react";


export default function SectionMenu() {
  const [cardCount, setCardCount] = useState(4);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth >= 768) {
        setCardCount(3); 
      } else {
        setCardCount(4); 
      }
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);

    return () => window.removeEventListener("resize", updateCardCount);
  }, []);
  const visibleCard = useMemo(() => {
    return MENUDATA.slice(0, cardCount)
  }, [cardCount])

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div className="mx-6">
        <h1  data-aos="flip-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="text-center text-white text-4xl lg:text-6xl mb-1 font-cactus-classical">МЕНЮ</h1>
        <h2  data-aos="flip-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="text-white text-center text-2xl lg:text-3xl   mb-3 font-cactus-classical">Популярные блюда</h2>


        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-5 lg:gap-10">
          {visibleCard.slice(0, cardCount).map((item, index) => (
            <MenuCard key={index} img={item.img} />
          ))}
        </div>
        {/* 
        <div className="flex justify-end mt-5">
          <Link href='/bar'>
            <Button size={0}>Смотреть еще</Button>
          </Link>
        </div>
        */}
      </div>
    </div>
  )
}

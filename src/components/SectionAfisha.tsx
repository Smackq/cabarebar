"use client"
import { AfishaCard } from "./ui/AfishaCard";
import { EVENTSINFOALL } from "@/data/events.all.data";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";


export default function SectionAfisha() {
  const [cardCount, setCardCount] = useState(4);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth >= 640) {
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
    return EVENTSINFOALL.slice(0, cardCount)
  }, [cardCount])

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div className="mx-6">
        <h1
          data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          className="text-center text-white text-4xl sm:text-5xl lg:text-6xl mb-5 font-cactus-classical"
        >
          АФИША
        </h1>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-5 lg:gap-10">
          {visibleCard.map((item) => (
            <AfishaCard schema={item.schema} dataTcEvent={item.dataTcEvent} dataTcToken={item.dataTcToken} id={item.id} key={item.id} img={item.img} title={item.title} description={item.description} date={item.date} price={item.price} prewDate={item.prewDate} />
          ))}
        </div> */}

        <div className="flex justify-end mt-5">
          
          <Link href={"/afisha"}>
            <Button size={0}>Смотреть еще</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

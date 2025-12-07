'use client'

import { useState } from "react"
import React from "react"
import Image from "next/image"
import Modal from "./Modal"



import { PropsEvent } from "@/data/events.all.data"
import { Button } from "./Button"

import { BuyTicketsButton } from "./BuyTicketsButton"


export function AfishaCard({img, title, description, date, price, id, dataTcEvent, dataTcToken, schema, prewDate}: PropsEvent) {

    const [isOpenModal, setIsOpenModal] = useState(false)

        function handleOpenModal() {
        setIsOpenModal(true)
    }
     const isMobile = typeof window !== "undefined" && window.innerWidth < 640
    return (
        <div className="cursor-pointer  hover:scale-105 duration-350 transition-transform">
            <div data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500">
              <div className="relative z-10 bg-white top-6 text-black text-center">{prewDate}</div>
            <Image onClick={handleOpenModal}
                src={img} 
                alt="img" 
                width={500} 
                height={500} 
                className=""
                
                 loading="lazy"
                 
            />
            </div>
             {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}> 
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center ">
                        <div className="w-[300px]">
                        <Image onClick={handleOpenModal}
                            src={img} 
                            alt="img" 
                            width={300} 
                            height={300} 
                            className="lg:w-[250px] lg:h-[350px] mx-auto lg:mx-0"
                        />
                        </div>
                        <div className="w-[300px] flex flex-col justify-between h-full">
  {/* Контент сверху */}
  <div>
    <h1 className="text-center text-white text-2xl mt-5 lg:mt-0 font-cactus-classical">
      {title}
    </h1>
    <p className="text-white text-lg font-extralight font-cactus-classical mt-3 px-2 text-center ">
      {description}
    </p>
    <div className="flex justify-between items-center mt-5 px-2 mb-10">
      <span className="text-[#F0C471] text-xl font-eb-garamond">{date}</span>
      <p className="text-[#F0C471] text-xl font-eb-garamond">Цена: {price}</p>
    </div>
  </div>

  {/* Кнопка внизу */}
  <div className="mt-auto flex justify-center pb-2">
    {schema ? (
      isMobile ? (
        <BuyTicketsButton dataTcToken={dataTcToken} dataTcEvent={dataTcEvent}>
          Купить билет
        </BuyTicketsButton>
      ) : (
        <a href={`/afisha/booking/${id}`}>
          <Button size={2}>Купить билет</Button>
        </a>
      )
    ) : (
      <p className="text-red-800 text-center">
        Уважаемый гость, на это мероприятие бронирование билетов
        осуществляется по номеру <br /> +7 (900) 636-13-22.
      </p>
    )}
  </div>
</div>

                            
                        
                    </div>    
                </Modal>}
           
        </div>

    )
}


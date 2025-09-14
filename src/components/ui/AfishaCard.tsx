'use client'

import { useState } from "react"
import React from "react"
import Image from "next/image"
import Modal from "./Modal"



import { PropsEvent } from "@/data/events.all.data"
import { Button } from "./Button"

import { BuyTicketsButton } from "./BuyTicketsButton"


export function AfishaCard({img, title, description, date, price, id, dataTcEvent, dataTcToken, schema}: PropsEvent) {

    const [isOpenModal, setIsOpenModal] = useState(false)

        function handleOpenModal() {
        setIsOpenModal(true)
    }
     const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    return (
        <div className="cursor-pointer">
            <Image onClick={handleOpenModal}
                src={img} 
                alt="img" 
                width={500} 
                height={500} 
                data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
                 loading="lazy"
            />
             {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}> 
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center ">
                        <div className="w-[300px]">
                        <Image onClick={handleOpenModal}
                            src={img} 
                            alt="img" 
                            width={300} 
                            height={300} 
                            className="w-[300px] h-[365px]  lg:w-[250px] lg:h-[350px] mx-auto lg:mx-0"
                        />
                        </div>
                        <div className=" w-[300px]">
                           <div className="flex flex-col h-full justify-between  rounded-xl">
                            <div>
                                <h1 className="text-center text-white text-2xl mt-5 lg:mt-0 font-cactus-classical">{title}</h1>
                                <p className="text-white text-lg font-extralight font-['EB_Garamond'] mt-3 px-2 text-center">
                                {description}
                                </p>
                                <div className="flex justify-between items-center mt-5 px-2 mb-10">
                                    <span className="text-[#F0C471] text-xl font-eb-garamond">{date}</span>
                                    <p className="text-[#F0C471] text-xl font-eb-garamond ">Цена: {price}</p>
                                </div>
                            </div>
                                {schema ? (
                                <div className="flex justify-center lg:mt-5">
                                    {isMobile ? (
                                    <BuyTicketsButton dataTcToken={dataTcToken} dataTcEvent={dataTcEvent}>
                                        Купить билет
                                    </BuyTicketsButton>
                                    ) : (
                                    <a href={`/afisha/booking/${id}`}>
                                        <Button size={2}>Купить билет</Button>
                                    </a>
                                    )}
                                </div>
                                ) : (
                                <div className="flex justify-center lg:mt-5">
                                    <p className="text-red-800 text-center">
                                    Уважаемый гость, на это мероприятие бронирование билетов
                                    осуществляется по номеру <br/> +7 (900) 636-13-22.
                                    </p>
                                </div>
                                )}

                            
                            </div>

                            
                        </div>
                    </div>
                            
                </Modal>}
           
        </div>

    )
}


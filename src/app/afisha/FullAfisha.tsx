'use client'


import { AfishaCard } from "@/components/ui/AfishaCard"

import { EVENTSINFOALL } from "@/data/events.all.data"
import { useMemo } from "react"


export default function FullAfisha() {
    const card = useMemo(() => {
        return EVENTSINFOALL
    }, [])
   

    return(
        <div className="max-w-5xl mx-auto mt-10 mb-10 lg:mb-20">
                    <div className="mx-6">
                        <h1   data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000" className="text-center text-white text-4xl sm:text-5xl lg:text-6xl    mb-5 font-cactus-classical ">АФИША</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3  justify-center gap-y-8 gap-5 lg:gap-10">
                        {
                            card.map((item) => (
                                 <AfishaCard schema={item.schema} dataTcEvent={item.dataTcEvent} dataTcToken={item.dataTcToken} id={item.id} key={item.id} img={item.img} title={item.title} description={item.description} date={item.date} price={item.price} prewDate={item.prewDate} />
                                
                            ))
                            
                        }
                        </div>
                       
                    </div>
                    <div>
                        
                        
                    </div>
                </div>
    )
}


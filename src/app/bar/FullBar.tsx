import { BARDATAMAIN } from "@/data/bar.data"
import { BarCardMain } from "@/components/ui/BarCardMain"
import { useMemo } from "react"

export function FullBar() {
  const card = useMemo(() => {
    return BARDATAMAIN
  }, [])
    return(
        <div className="max-w-5xl mx-auto mt-10 mb-10 lg:mb-20">
             <div className="mx-6">
               <h1   data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000" className="text-center text-white text-4xl sm:text-5xl lg:text-6xl mb-1 font-cactus-classical">БАР</h1>
               <h2   data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000" className="text-white text-center text-3xl mb-3  font-cactus-classical">Авторские коктейли</h2>
       
               <div className="flex flex-col justify-center items-center  gap-y-0  lg:gap-0">
                 {card.map((item, index) => (
                   <BarCardMain key={index} img={item.img} />
                 ))}
               </div>
       
               
             </div>
           </div>
    )
}
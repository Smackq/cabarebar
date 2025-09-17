'use client'

import Image from "next/image"
import { Button } from "./ui/Button"
import Link from "next/link"
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from "react"

export function SectionAbout() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="max-w-5xl mx-auto md:mt-10  ">
      <div className="flex flex-col md:flex-row justify-between  items-center gap-10 mx-6">
        
        <div className="">
          <Image src='/images/main/block2logo1.png' width={600} height={600} alt="img" className="mt-10 md:mt-0"  />
          
          <div className="text-white text-sm  font-extralight  mt-5  text-center">
           Cabaret&Bar Мюзикл — окунитесь в волшебство наших шоу!
Здесь каждый вечер превращается в спектакль: изысканная кухня, живая музыка и эксклюзивные номера, от которых захватывает дух. Почувствуйте магию Cabaret&Bar — место, где ваши мечты становятся реальностью.
          </div>
          
          <div className="mt-3 flex justify-center lg:justify-center">
            <Link href={'/afisha'}>
              <Button size={0}>Смотреть афишу</Button>
            </Link>
          </div>
        </div>

        <div 
  
  className="hidden md:flex lg:flex items-end justify-end  "
>
  <Image 
    src="/images/main/block2img1.jpg" 
    width={1300} 
    height={1300} 
    alt="img"
    className=" rounded-2xl"
  />
</div>

      </div>
    </div>
  )
}

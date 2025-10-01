import Image from "next/image"
import Link from "next/link"
import { MenuItem } from "./MenuItem"
import { MENU } from "@/config/pages.config";
export function Footer() {
    return(
        <div className="w-full bg-black mx-auto p-6  overflow-hidden ">
            <div className=" ">
                <div className="max-w-5xl mx-auto">
            <div className="mx-6 flex flex-col justify-center items-center ">
                <span className=" text-[#F0C471]    text-sm lg:text-xl font-serif">
                    МЮЗИКЛ | Ресторан - кабаре бар | Псков
                </span>
                 <ul className="space-y-1 mt-5 text-white font-eb-garamond text-sm lg:text-lg">
                    <li>ВС–ЧТ — с 12:00 до 22:00</li>
                    <li>ПТ–СБ — с 12:00 до 00:00</li>
                </ul>
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-3 justify-center items-center lg:mx-6">
                <div className="hidden lg:flex">
                    <ul className="text-white font-['EB_Garamond']  text-sm lg:text-lg space-y-1 ">
                        {MENU.map((item) => (
            
              <MenuItem key={item.href} name={item.name} href={item.href}  />
              
            
          ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center mt-5 lg:mt-10 lg:mx-6 ">
                    <span className=" text-[#F0C471]  font-['EB_Garamond']   text-xl ">
                        Контакты
                    </span>
                    <ul className="space-y-1 mt-2 lg:mt-4    text-white font-['EB_Garamond'] flex flex-col items-center">
                        <li>+7 (900) 636-13-22</li>
                        <li>@cabarete_bar</li>
                        <li>Советская 53/15, Псков</li>
                    </ul>
                </div>
                <div className="flex flex-col items-end lg:mx-6 absolute mt-3 lg:static">
                    <div className="space-y-4">
                        <div className="cursor-pointer">
                            <Link href='https://vk.com/cabarete_bar?from=groups'>
                                <Image src='/images/icons/vk.svg' alt="imgVK" width={50} height={50}/>
                            </Link>
                        </div>
                        <div className="cursor-pointer">
                            <Link href="https://t.me/cabarete_bar" target="_blank" rel="noopener noreferrer">
                                <Image src='/images/icons/tg.svg' alt="imgTG" width={50} height={50}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" flex lg:flex-row flex-col items-center  justify-start text-white/50 lg:text-sm text-[10px] mt-5 gap-2 lg:gap-10 lg:mx-6 ">
                
                    <p className="italic">@2025 CabaretBar — МЮЗИКЛ</p>
                <div>
                    <p className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</p>
                </div>
                <div>
                    <p className="hover:text-white transition-colors cursor-pointer">Оферта</p>
                </div>
                <div>
                    <p className="hover:text-white transition-colors cursor-pointer">Сайт разработан</p>
                </div>
            </div>
            </div>
          </div>

        </div>
    )
}
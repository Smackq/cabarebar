'use client'
import { useState } from "react"
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image"

export function Dasha() {

    const [classes, setClasses] = useState(false)
    const [myWay, setMyWay] = useState(false)

    return(
         <div className="max-w-5xl mx-auto mt-6 mb-10 lg:mb-20">
                <div className="mx-6">
                       
                <div className="hidden lg:block">
                <div className="mb-10   ">
                    <Image src='/images/about/dasha/DashaM.jpg' width={1000} height={200} alt="img" className="" priority/>
                </div>
                    <div className="flex  gap-x-10  mb-20">
                                    <div>
                                        <div className="text-white font-extralight italic text-xl mb-5">
                                            <h1 className="mb-5 text-3xl  font-eb-garamond">Хореограф - постановщик г.Санкт-Петербург</h1>
                                            <div className="font-eb-garamond">
                                            <p >2012-2016 - РГПУ им. А.И.Герцена</p>
<p>Кафедра &quot;хореографического искусства&quot; - бакалавриат</p>
<p>2016-2018 - магистратура</p>
<p>г.Санкт-Петербург</p>
</div>

                                        </div>
                                        <div>
                                            <h2 className="text-[#D1AC66] font-eb-garamond italic text-2xl font-semibold">Выступала на сцене:</h2>
                                            <p className="text-white font-eb-garamond italic text-lg">Академия русского балета имени А. Я. Вагановой<br/>Музыкальный театр имени Шаляпина (Мюзик Холл)<br/>танцовщица праздника Алые Паруса на Дворцовой площади, 2013,2014; И другие…</p>
                                        </div>
                                    </div>
                                    <div className="relative w-fit">
                                        <Image
                                            src="/images/about/dasha/Dasha1.jpg"
                                            width={500}
                                            height={200}
                                            alt="img"
                                            className=""
                                        />
                                        <Image
                                            src="/images/about/dasha/Dasha2.jpg"
                                            width={200}
                                            height={200}
                                            alt="img"
                                            className="absolute left-[-40] bottom-[-40]"
                                        />
                                    </div>

                                </div>
                        <div className="flex justify-between gap-30">
                            <div>
                              <h2 className="text-[#D1AC66] font-eb-garamond italic text-2xl font-semibold mb-5">Классы:</h2>
                             <p className="text-white font-eb-garamond italic text-lg">
  джаз (преподаватель Павел Ивлюшкин, Украина) 2014; 
  техника Contemporary (преподаватель Кристина Кляйн, Германия) 2014; 
  техника Contemporary (преподаватель Martin Forsberg, Швеция) 2014; 
  техника Liquid Body (преподаватель Бруно Каверна, Бразилия) 2014; 
  степ (преподаватель Daniel Larsson, Швеция) 2014; 
  Contemporary (преподаватель LAURA ARIS ÁLVAREZ, Бельгия) 2014; 
  техника Gaga (преподаватель Noa Zuk) 2015; 
  классы Zebastian Mende Maligna, танцовщика Ultima Vez (Коста-Рика) 2015; 
  партнеринг (преподаватели Marion Sparber и Nerea Martinez, Германия) 2015; 
  И другие…
</p>

                            </div>
                            <div>
                               <h2 className="text-[#D1AC66] font-eb-garamond italic text-2xl font-semibold mb-5">Путь Дарьи:</h2>
                               <p className="text-white font-eb-garamond italic text-lg">
  2016 - 2018 - В городе Сланцы основала театра современного танца «Созвездие».  
  В танцевальный сезон 2017 - 2018 было создано два спектакля - мюзикла «Феерия Мюзикла» по мотивам произведений «Нотр-Дам де Пари», «Чикаго», «Бурлеск», «Моцарт. Рок Опера» по мотивам одноименного произведения.  
  Хореограф - постановщик. Г. Сланцы.  
  С 2020 года - творческий перерыв.  
  С 2025 года - хореограф - постановщик в ресторане «кабаре-бар».
</p>

                            </div>

                        </div>
                        <div className="flex mt-10">
                        <Image src='/images/about/dasha/Dasha3.jpg' width={1000} height={200} alt="img" />
                    </div>
                    <div >
                </div>
                </div>
                        <div className="lg:hidden">
                    <h1 className="text-4xl  font-eb-garamond mb-5 font-semibold bg-[linear-gradient(to_right,#F5DB96,#CC9D49,#EFD48F,#CD9B49,#F3DB93,#CF9A4A)] bg-clip-text text-transparent">Ярошко Дарья Александровна</h1>
                    <div className="flex gap-3 mb-5">
                        <div>
                            <h2 className="text-white font-eb-garamond italic text-sm font-semibold ">Хореограф - постановщик  г. Санкт-Петербург</h2>
                            <hr className="border-[#D1AC66] mt-1 mb-3"/>
                            <p className="text-white font-eb-garamond italic text-sm">2012-2016 - РГПУ им. А.И. Герцена Кафедра «хореографического искусства» - бакалавриат 2016-2018 - магистратура г. Санкт - Петербург </p>
                        </div>
                                <Image
                                            src="/images/about/dasha/DashaT1.jpg"
                                            width={165}
                                            height={150}
                                            alt="img"
                                            className=""
                                        />
                    </div>
                    <div>
                        <h2 className="text-2xl text-[#D1AC66] font-eb-garamond mb-2 font-semibold italic">Выступала на сцене:</h2>
                        <p className="text-white font-eb-garamond italic text-sm mb-5">Академия русского балета имени А. Я. ВагановойМузыкальный театр имени Шаляпина (Мюзик Холл)танцовщица праздника Алые Паруса 
на Дворцовой площади, 2013,2014;
И другие…</p>
                             <Image
                                            src="/images/about/dasha/DashaT2.jpg"
                                            width={1000}
                                            height={150}
                                            alt="img"
                                            className=""
                                        />
                                        <div className="flex flex-col items-start  mt-5 gap-2">
                                            <button onClick={() => setClasses(!classes)} className="text-2xl text-[#D1AC66] font-eb-garamond  font-semibold italic hover:text-[#F0C471] transition-colors flex items-center">Классы <HiChevronDown className="w-5 h-5" /></button>
                                            { classes && (<p className="text-white font-eb-garamond italic text-sm leading-relaxed">джаз (преподаватель Павел Ивлюшкин, Украина) 2014;- техника Contemporary (преподаватель Кристина Кляйн, Германия ) 2014;-техника Contemporary (преподаватель Martin Forsberg, Швеция) 2014;-техника Liquid Body (преподаватель Бруно Каверна, Бразилия) 2014;-степ (преподаватель Daniel Larsson, Швеция ) 2014;- Contemporary (преподаватель LAURA ARIS ÁLVAREZ, Бельгия) 2014;-техника Gaga (преподаватель Noa Zuk ) 2015;-классы Zebastian Mende Maligna, танцовщика Ultima Vez (Коста-Рика) 2015;-партнеринг (преподаватели Marion Sparber и Nerea Martinez, Германия) 2015;И другие…</p>)}
                                            <button onClick={() => setMyWay(!myWay)} className="text-2xl leading-relaxed text-[#D1AC66] font-eb-garamond  font-semibold italic hover:text-[#F0C471] flex items-center">Путь Дарьи <HiChevronDown className="w-5 h-5" /></button>
                                            { myWay && (<p className="text-white font-eb-garamond italic text-sm ">2016 - 2018 - В городе Сланцы основала театра современного танца «Созвездие» В танцевальный сезон 2017 - 2018 было создано два спектакля - мюзикла «Феерия Мюзикла» по мотивам произведений «Нотр-Дам де Пари», «Чикаго», «Бурлеск».«Моцарт. Рок Опера» по мотивам одноименного произведения. Хореограф - постановщик. Г. Сланцы. С 2020 года - творческий перерыв. С 2025 года - хореограф - постановщик в ресторане «кабаре-бар»</p>)}
                                        </div>
                    </div>


                <div>
                        </div>
                </div>
            </div>
        </div>
    )
}
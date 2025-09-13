import Image from "next/image"

export function Aivar() {
    return(
        <div className="max-w-5xl mx-auto mt-6 mb-10 lg:mb-20">
            <div className="mx-6">
                <div className="hidden lg:block">
                                <div className="">
                                    <Image src='/images/about/aivar/AivarM.jpg'  width={1000} height={200} alt="img" priority/>
                                </div>

                                <div className="flex  justify-between items-start  gap-20 mb-20">
                                    <div className="mt-12">
                                        <h1 className="text-5xl text-[#B00310] font-eb-garamond font-semibold italic mb-5">Айвар Валиксович Митровскис</h1>
                                        <p className="text-white font-extralight italic text-lg text-left"> 

                Айвар Митровскис — предприниматель, хореограф и культурный деятель, чья жизнь связана с искусством и поиском новых форм самовыражения. Получив классическое хореографическое образование, он <br/>с юности участвовал во всероссийских и международных конкурсах, выступал на ведущих площадках Европы. Сегодня Айвар соединяет красоту искусства <br/> с предпринимательством, создавая проекты в сфере танца, гастрономии и культуры в Санкт-Петербурге и Пскове. Его работа всегда направлена на то, чтобы вдохновлять людей и делиться атмосферой творчества. </p> 
                                    </div>

                                    <div className="mt-12">
                                        <Image src='/images/about/aivar/Aivar1.jpg'  width={1300} height={500}  alt="img"/>
                                    </div> 
                                </div>


                                <div className="grid grid-cols-2 justify-between items-center  gap-10 mb-10">
                                    <div >
                                        <Image  src='/images/about/aivar/Aivar2.jpg'  width={500} height={200} alt="img"  />
                                    </div>
                                    <div>
                                        <h2 className="text-[#B00310] font-eb-garamond italic text-2xl mb-5 font-semibold text-right">Cabaret&Bar — воплощение мечты</h2>
                                        <p className="text-white font-extralight italic text-lg text-right">В 2025 году Айвар Митровскис открыл в Пскове Cabaret&Bar — место, где соединились эстетика XVIII века, гастрономическое искусство и живая сцена. Интерьеры 
                в стиле рококо с антикварной мебелью, авторская кухня 
                и шоу-программа 
                с вокалом, танцем, джазом, балетом и элементами бурлеска создают атмосферу «театра вкуса и эмоций». Здесь каждый гость становится частью маленького спектакля, погружаясь в эпоху роскоши и искусства.</p>
                                    </div>

                                </div>
                                <div className="mb-10">
                                    <h2 className="text-[#B00310]  font-eb-garamond italic text-2xl font-semibold mb-5">Миссия</h2>
                                    <div className="flex justify-between items-start  gap-10 ">
                                        <div>
                                            <p className="text-white font-extralight italic text-lg text-left">Для Айвара Митровскиса Cabaret&Bar — это не только бизнес, но и культурная миссия: подарить жителям и гостям Пскова пространство, где соединяются красота, вдохновение и творчество. Это место, где можно отдыхать душой, открывать для себя новые впечатления и прикоснуться к атмосфере театральности, изысканности и праздника.</p>
                                        </div>
                                        <div className=''>
                                            <p className="text-white font-extralight italic text-lg text-right  ">Сегодня Cabaret&Bar становится точкой притяжения для тех, кто ценит искусство во всех его формах. А его основатель Айвар Митровскис продолжает развивать проект, превращая его в культурный символ города.</p>
                                        </div>

                                    </div>
                                </div>


                                <div className="">
                                    <Image src='/images/about/aivar/Aivar3.jpg'  width={1000} height={200} alt="img" priority/>
                                </div>
                            </div>
            </div>
                

            <div className="lg:hidden mx-6">
                <h1 
                    data-aos="flip-down"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000" className="text-center text-white text-4xl    mb-5 font-cactus-classical ">ОСНОВАТЕЛЬ</h1>
                <div className="flex justify-between items-start mb-5 gap-3">
                    <div className="">
                        <h2 className="text-lg font-semibold font-eb-garamond italic text-[#B00310] text-left leading-5">Айвар Валиксович Митровскис </h2>
                        <hr className="border-[#B00310] mt-1 mb-3"/>
                        <p className="text-[10px] text-white">   Айвар Митровскис — предприниматель, хореограф 
и культурный деятель. 
С юности увлечён сценой, 
участвовал в международных конкурсах и выступал на ведущих площадках Европы. Соединив искусство 
с предпринимательством, Айвар реализовал проекты в сфере танца, гастрономии и торговли в Санкт-Петербурге и Пскове.
</p>
                    </div>
                    <div>
                        <Image src='/images/about/aivar/Aivar1.jpg'  width={1900} height={200} alt="img"/>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold font-eb-garamond italic text-[#B00310] text-left mb-2">Cabaret&Bar — воплощение мечты</h2>
                    <p className="text-[10px] text-white mb-5">В 2025 году Айвар Митровскис открыл в Пскове Cabaret&Bar — место, где соединились эстетика XVIII века, гастрономическое искусство и живая сцена. Интерьеры 
в стиле рококо с антикварной мебелью, авторская кухня 
и шоу-программа 
с вокалом, танцем, джазом, балетом и элементами бурлеска создают атмосферу «театра вкуса и эмоций». Здесь каждый гость становится частью маленького спектакля, погружаясь в эпоху роскоши и искусства.</p>
                </div>

                <div className="mb-5">
                    <Image src='/images/about/aivar/Aivar2.jpg'  width={1000} height={200} alt="img"/>
                </div>

                <div>
                    <h2 className="text-lg font-semibold font-eb-garamond italic text-[#B00310] text-left mb-2">Миссия</h2>
                    <p className="text-[10px] text-white mb-2">Для Айвара Митровскиса Cabaret&Bar — это не только бизнес, но и культурная миссия: подарить жителям и гостям Пскова пространство, где соединяются красота, вдохновение и творчество. Это место, где можно отдыхать душой, открывать для себя новые впечатления и прикоснуться к атмосфере театральности, изысканности и праздника.</p>
                    <p className="text-[10px] text-white mb-5">Сегодня Cabaret&Bar становится точкой притяжения для тех, кто ценит искусство во всех его формах. А его основатель Айвар Митровскис продолжает развивать проект, превращая его в культурный символ города.</p>
                </div>

                <div>
                    <Image src='/images/about/aivar/Aivar3.jpg'  width={1000} height={200} alt="img"/>
                </div>

            </div>
        </div>
    )
}
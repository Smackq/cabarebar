import { AboutCard } from "@/components/ui/AboutCard"
import { ABOUTDATA } from "@/data/about.data"

export function FullAbout(){
    return(
         <div className="max-w-5xl mx-auto mt-10 mb-10 lg:mb-20">
                            <div className="mx-6">
                                <h1   data-aos="flip-down"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000" className="text-center text-white text-4xl sm:text-5xl lg:text-6xl    mb-5 font-cactus-classical ">О НАС</h1>
                   <div className="grid grid-cols-1 sm:grid-cols-2  justify-center gap-y-8 gap-5 ">
                        {
                            ABOUTDATA.map((item) => (
                             
                                    <AboutCard key={item.img} img={item.img} name={item.name} href={item.href}/>
                           
                            ))
                        }

                   </div>
                                
                           
                                
                    </div>
            </div>
    )
}